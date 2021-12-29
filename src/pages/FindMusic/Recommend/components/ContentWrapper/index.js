/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 14:28:01
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 00:20:57
 */
import { memo } from "react";

export default memo((props) => {
    const [LeftContent, RightContent] = props.children
    return (
        <main className="content-wrap">
            <div style={{ display: 'flex', width: "100%" }}>
                <div style={{ padding: "20px 20px 40px", border: "2px solid #e4e4e4", width: "730px" }}>
                    {LeftContent}
                </div>
                <div style={{ borderRight: "1px solid #e4e4e4", flex: "1" }}>
                    {RightContent}
                </div>
            </div>
        </main >
    )
})
