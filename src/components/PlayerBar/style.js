/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-05 00:06:56
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-08 17:34:28
 */
import styled from "styled-components"

export const StyleWrap = styled.div`
    height: 50px;
    position: fixed;
    bottom: 0;
    background:url(${require("@/assets/img/playbar_sprite.png")}) repeat 0 0;
    left: 0;
    right: 0;
    font-size: 12px;
    i{
      cursor: pointer;
    }
    .bg-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 980px;
        margin: 0 auto;
        .control-btns{
            display: flex;
            align-items: center;
            .prev,.next{
                width: 28px;
                height: 28px;
            }
            .prev{
                background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat 0 -130px;
            }
            .next{
                background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -80px -130px;
            }
            .play {
                width: 36px;
                height: 36px;
                margin: 0 8px;
                /* background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"}; */
                background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat 0 ${props => props.isPlaying ? "-165px" : "-204px"};
            
            }
        }
        .player-bar{
            display: flex;
            width: 642px;
            align-items: center;
            img {
              width: 34px;
              height: 34px;
              border-radius: 5px;
              margin-right: 10px;
            }
            .player-info{
                flex: 1;
                color: #676767;
                margin: 10px 0 -10px 8px;
                .song {
                  color: #fff;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-wrap: normal;
                  max-width: 300px;
                  .singer-name {
                    color: #9b9b9b;
                    margin-left: 10px;
                  }
                }

            }
            .play-progress{
                display: flex;
                align-items: center;

            .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
            }
        
             .time-info {
            color: #676767;
        .now-time {
          color: #9b9b9b;
        }
        
             }
    
            }
        }
        .option{
            display: flex;
            position: relative;
            top: 5px;

        .btn {
          width: 25px;
          height: 25px;
          cursor: pointer;
        }
    
        .favor {
    background-position: -88px -163px;
        }

        .share {
    background-position: -114px -163px;
        }
    
        .right {
          width: 126px;
          padding-left: 13px;
          background-position: -147px -248px;
        display: flex;
          .volume {
            background-position: -2px -248px;
          }

        .loop {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-66px -248px"
      case 2:
        return "-66px -344px"
      default:
        return "-3px -344px"
    }
  }};
        }

        .playlist {
          width: 59px;
          background-position: -42px -70px;
          padding-right: 8px;
          color: #a3a3a3;
          text-align: end;
        }
        
        }
        }
    }
    .playbar_sprite{
     background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat 0 99999px
    }
`