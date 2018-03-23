<template>
  <div>
    <!--<div>-->
    <!--<van-button type="default">默认按钮</van-button>-->
    <!--<van-button type="primary">主要按钮</van-button>-->
    <!--<van-button type="danger">危险按钮</van-button>-->
    <!--</div>-->

    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />

    </div>

  </div>
</template>
<script>
  import areaList from '../jslib/area'

  export default {
    data() {
      return {
        areaList: areaList,
        searchResult: []
      }
    },
    components: {},
    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    },
    mounted() {

    },
    updated() {
    }
  }
</script>

<style scoped lang="less">

</style>
