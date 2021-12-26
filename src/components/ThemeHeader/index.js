/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 15:02:31
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 16:44:08
 */
import react, { memo } from "react";
import { ThemeHeaderWrap } from "./style"
import PropTypes from "prop-types"
const ThemeHeader = memo(({ title, keywords }) => {
    return (
        <ThemeHeaderWrap>
            <div className="header-title">
                <h3>{title}</h3>
            </div>

            <div className="other-info">
                {keywords.map((item, index) => {
                    return (
                        <a className="recommend-list-item" key={item}>{item}</a>
                    )
                })}
            </div>

            <a className="more-btn">更多</a>
            <i className="icon sprite_02"></i>
        </ThemeHeaderWrap>
    )
})

ThemeHeader.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}
ThemeHeader.defaultProps = {
    keywords: []
}
export default ThemeHeader