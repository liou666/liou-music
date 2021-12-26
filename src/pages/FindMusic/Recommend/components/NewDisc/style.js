/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 18:05:04
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 20:15:06
 */
import styled from "styled-components"

export const NewDiscWrap = styled.div`
    margin-top: 40px;
    position: relative;
    .top-wrapper{   
        position: relative;
        zoom: 1;
        height: 186px;
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        background:#f5f5f5;
        .new-carousel-item{
           display: flex !important;
           justify-content: space-between;
           flex-wrap: wrap;
           padding-left: 30px;
            .album-item{
               flex: 1;
                height: 200px;
                .album-image {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    margin-top: 25px;
                                
                    img {
                      width:100px;
                      height:100px;
                 }

            .cover {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background-position: 0 -845px;
              text-indent: -9999px;
            }
    .image_cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-indent: -9999px;
    background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat -145px -57px;
}
  }
                /* img{
                    width: 100px;
                    height: 100px;
                } */
                .text-info{
                    width: 130px;
                    font-size: 12px;
                    h5 {
                      color: #000;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                    }
                    em {
                      color: #666;
                      font-style: normal;
                    }
                }
            }
        }
    }
    .arrow {
        position: absolute;
        top: 50%;
      width: 25px;
      height: 25px;
      cursor: pointer;
      z-index: 99;
    }

    .arrow-left {
        left: 8px;
        background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -260px -75px;
    }

    .arrow-right {
        right: 0;
        background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -300px -75px;
    }
`
