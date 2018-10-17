<template>
    <div class="mine">
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt=""
                            class="weui-media-box__thumb">
                    </div>
                    <div class="weui-media-box__bd"><h4 class="weui-media-box__title">我叫某某</h4>
                        <p class="weui-media-box__desc">账户余额 80元</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft"></div>
        </div>
        <div class="menu-list">
            <group>
                <cell title="消费记录" is-link>
                    <img slot="icon" width="20" style="display:block;margin-right:5px;"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFUUlEQVRoQ+2aXWwUVRTH/2d2C5SvzhojBaIGErJBH/QBXkiMrd3ZEjEShKW7YxtBjDURjD6QmJhQE6K+EIxfL2ICFp1ZWL5eULq7LR8ixkQeEUQTQgkiMXHuUqDF7s4x07DN7HY/ZjvT0ibu2+See+7/d8+es+feHULRZ3Y0uWimRLvBeBaExuJxd8+cMLTwRnc+CmdTwWPkXL1cd+ciAY97ucioL8ZBQ1favPRdABCIJt+ERJ97uUCBr4kGkNXkXgJtmjAA4IChKVEv/RdEQI4ljxDROi8XKPTFcUMLx7z0P7kAzLqhh9X/AWw7MLkRADRDU16ethFg4FuhKe3TF4D5G6GHO6YvAHBEaMr6aQsAxl9GMLQY75PpFcRkJzEYtENooZ3TGIBNmNQl4qEPAGK3IJMeAVtjlwH4EgND5SCIcHfI5M7BeOu1+WpymcRYJLLiLBIbc/k5Dw6g2tYzBrMshQbiLefkaHIdCHEimsFArzCG1+D75+9ZLqYmgE38nMjJxjp/9hoR/HlmBtJi2FhtRWLqAdjE5wXLarKDQN32oLGJZhFXTk0tAJv4BjW9VGJz/1DWt3Ew0XI9oKa2AvjMgmDmeyBfUGgtV6cOgE38vPa+oC+XO02EBQD6h4alVRaErKa6wOhiIJLRlcMOc4BvMONytZwjIuv8HKxmV3LcJn5urO9JP3KniPCwzXYUIhBNP2PEQz84qkLM6BZZ41V72aokUI6lthHh05og7NVGTT4NoI9AgRI++g2f+QT2t96xj1X8CpmMtoyuHHQq6P6NxnWn9igST8BpgOaXmm8C2zOasqt4rHIOMP88DP+W2/pzF5yIktX0WwT+xImtXfz8tvRKn89M1yreYQ44klObkT1ho72r/GT2gDC3jJNthqaUvSmZ/Co0VnwahPpi8cxWtURnJq7sqbQ7FQEYbBJwmEG/VttiYm4EoR2gOWVtC9qDVBMRvisnHoRNQlO6GyI9SzKJ1itl+yX7wNhrFX7P0MIfVhM/+osZTTWRhJOl7Jn53xz7mq3exhqXY8kEEW0otfN58XIs9TETrpdKXmdlFLxZaOF9TgHqoz2PzpKk/jIAh4QejshtfU8Jc8FFBAZZHvjnOBEpeXtmzpkktd/SQnFLPBHeLld9nAEwbhLzTgY5qkIg3kJEpQ/tJl4w4spxWU2dB6NfZI0NCCyVAgPGURDWWOLBiIh4+GhevCXSFYDTna9mx8x/i6DSOO+Pk8v8Zu7SffsDhhaKoemUT16YTYC5u1i8RwCetBK7DE3ZLqup3QS8MwrM2GPoyuv550As9REI79o3xFUEvGolsmwuHwiGL8u/pW8W9DiMQSZptdBazpQS7zoCXrQSzPhF6MpKWU2tJeCYVd8BPgPQ18JvHrR6m3LiXQPAi1bC5K1GPPyFHEtafcyte8x7rTNufaR38Qy/qUrAZhCWl8sjV1+haslZbZyBYdz1PyKONYsR2xfPzpPn3l0PRgcITQSSqvl4sADMh8SNuligMdsKCdaV4loAs6qJ9iyJa1mopC3jJwYHieih8fp6oBEYr2gPI8A/ZplfG9Bb8z8+Xmga42Pk6qQuu4uAMf8duIoAM60TeujYhKguchqIpB5DHa4Wr+USgL8SWfGG0zOxG9CGaLJFkijtKcCIM8afDP7djTgnc4mwotRZwlUEnCw80Ta1AuwjolcmWlQt/k1QZ0YLfVluTtGRchz3OrWoGYetCXNFRms97wgAIy973L5AoCXjWMvzKcx8VOjhlyo5LnxbBcDs9hMLZ5rSbjA1ef+6TXXGkW6VcIWAI8bwnB1IrBqsNOs/3f8UXgVM39UAAAAASUVORK5CYII=">
                </cell>
                <cell title="报错" is-link>
                    <img slot="icon" width="20" style="display:block;margin-right:5px;"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEIUlEQVRoQ+2YX2gcVRTGvzNr/lhoaTE7i2ACVhTBIsWS5qEPFlvMTEubnUjQJ0UUpaIIQqFVLLQIhUBfRK0oiuiD0GLnphpmIrXkQRDb4kMo0lJBpS2yM6kGq4SUZI7sptrdzOzsvTM3qS3Zx5l7zzm/891vzswSbvEf3eL1YxngZiu4rMBtqcDU9u1rZtrnXgfjCYBWADxSmL12oOurk5d1A2s/QpWyfR+Ak0ToqS+Wwb8Xomhb18jX3+uE0ArAQ0OFcPbqdwD1JhbJfLEwQ+vu8rw/dUFoBQgd6zUGHUotjvGOKbxX/ncA4WD/3RwZ50FYmQ7AzBHWl477EzogtCkQONbnAD0lVRTjjCm85GMmFeDGIi0AlZ32JirgW8Xcz5mu97Hintjy3AC8YUNb2FOcAOhBlWKYMdmO6fvXiPEplX0L1+YGqDjWbgINLwzMwK+IeNgAT0WGsZeAdbHkjMNF4b100wCqxo0i4ycirGgsgv8i4geKx8Z+q17nzZs7g9V3nl84G8D5DZ1LgcCxjgA0FOs+8zcl4W+tvx6W7feYsCvWbcaZovA2EsBZlMgMMFm2tkREJ5KSMkOUhOc0AAxYw2zQ7qT1BLxQdL0PlwygatygxzxHwFodAGBMtWH63iyGzqRA4Fh7ADrYrGOqCtR8wvxBSfgvqqqgDHBl4PHuWSqcixv3RuosAFUCw0Bf1zH/tAqEMkDgWF8ANJiWJBNAVQXwhOn661UMrQSQZtx6oKwAtaOEaFfJHXtfVgVpgFbG1QWgamhpgMCx3wDwlkxn8ihQi8/8kSn852VySQFcN+4FInTIBM0NAMAg3ihjaCmAimMJAg3IFD/fQLVBljhLJA3dEkDWuI0e4FMl4ffVX2v22pHelOhl0x17N21NKgDbdkfQiR+bTdymgZmZgMeKwh+vrpkctHqjiE6AsEpWxXkv4Grn3PTaVV+OTzbblwoQOvY+BvYrJa1bzMw/g+hvYn4IRC3VTszD/Ikp/GeVAVSNmxVSZl+aoZt2JShboyDaJpMg2YStP2hkY9cm9B0rH6GjR+cW7kkECAfsHWzguGyC+DrJDxqlBPyq6fpvtwSoGjfs4Asg6laK33j25T9oZJM0MXRMgYpj7ydgn2zcxOOjYQ4kx+XPSsJ/uv5eA0Bl55YSCm2/EKgzH4CuORCvwuCor0uMnfr3TiOAhu7PP781zYFkGY6Ywn8yESAoWz6I+vN0v36vljkQL+aS6Xr/+bNBgcCxq5PzUV0AixTnsul69yQqEJb732QyDixSYl1hPzVd75lEgNrfhN1FkWeA6aoyOQ7/0H6tsHX16OgfiQA1/wHGFad/RwT0go2HlV/AtBPwNANnifl0ccYYIc+bafoY1Z57CQJme0NcgsJkUywDyHZqsdYtK7BYnZWN+w8lcelA1Z2ougAAAABJRU5ErkJggg==">
                </cell>
                <cell title="提现" is-link>
                    <img slot="icon" width="20" style="display:block;margin-right:5px;"
                         src="data:image/png;base64,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">
                </cell>
            </group>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Footer from '../layout/Footer'
  import {Tabbar, TabbarItem, Group, Cell, Panel} from 'vux'

  export default {
    name: 'home',
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Panel,
      Footer
    },
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
    .menu-list{
        /deep/ .weui-cell {
            padding: 15px;
        }
    }
    .weui-panel {
        background-color: #FFFFFF;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
    }
    .weui-media-box_appmsg {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .weui-panel__bd{
        padding: 10px;
    }
    .weui-media-box_appmsg .weui-media-box__hd {
        margin-right: .8em;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .weui-media-box_appmsg .weui-media-box__thumb {
        width: 100%;
        height: 100%;
        vertical-align: top;
    }
    .weui-media-box_appmsg .weui-media-box__hd {
        margin-right: .8em;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .weui-media-box_appmsg .weui-media-box__bd {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 0;
    }
    .weui-media-box__title {
        font-weight: 400;
        font-size: 17px;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    a.weui-media-box {
        color: #000000;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .weui-media-box__desc {
        color: #999999;
        font-size: 13px;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
</style>
