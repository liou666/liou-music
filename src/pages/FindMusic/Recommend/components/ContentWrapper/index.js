/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 14:28:01
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 14:41:56
 */
import { memo} from "react";

export default memo((props) => {
    const [LeftContent, RightContent] = props.children
    return (
        <main className="content-wrap">
            <div style={{ display: 'flex', width: "100%" }}>
                <div style={{ padding: "20px 20px 40px", width: "730px" }}>
                    {LeftContent}
                </div>
                <div style={{ padding: "20px 20px 40px", flex: "1" }}>
                    {RightContent}
                </div>
            </div>
        </main>
    )
})
