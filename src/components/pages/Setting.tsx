import { FC, memo } from "react"
import { HeaderLayout } from "./templates/HeaderLayout";

export const Setting: FC = memo(() => {
    return (
        <HeaderLayout>
            <p>設定ページ</p>
        </HeaderLayout>
    );
});
