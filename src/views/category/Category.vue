<template>
 <div id="category">
  <nav-bar class="nav">
    <template v-slot:center><div>分类</div></template>
  </nav-bar>
  <div class="content">
      <tab-menu :categories="categories"
                @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <option-card  :opationcard="['流行','新款','精选']"
            @optioncard ="tabClick" ></option-card>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>  
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/NavBar'
  import TabMenu from './childComps/TabMenu'
  import Scroll from 'components/common/Scroll/Scroll.vue'

  import TabContentCategory from './childComps/TabContentCategory'
  import TabContentDetail from './childComps/TabContentDetail'
  import OptionCard from 'components/content/TabControl/OptionCard.vue'
  import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
  import {POP, SELL, NEW} from "@/common/const";
  import {tabControlMixin} from "@/common/mixin";
  export default {
    name: "Category",
    components:{
      NavBar,
      TabMenu,
      Scroll,
      TabContentCategory,
      TabContentDetail,
      OptionCard,
    },
    mixins: [tabControlMixin],
    data() {
		  return {
		    categories: [],
        categoryData: {
        },
        currentIndex: -1
      }
    },
    created() {
		  // 1.请求分类数据
      this._getCategory()
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
		  _getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail(POP)
          this._getCategoryDetail(SELL)
          this._getCategoryDetail(NEW)
        })
      },
      _getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       * 事件响应相关的方法
       */
      selectItem(index) {
        this._getSubcategories(index)
      }
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;
}
 #category {
    height: 100vh;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>
