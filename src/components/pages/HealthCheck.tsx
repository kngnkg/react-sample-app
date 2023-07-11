import { FC, memo, useEffect } from "react"
import { useHealthCheck } from "../../hooks/useHealthCheck";
import { HeaderLayout } from "./templates/HeaderLayout";
import { Center, Wrap } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

export const HealthCheck: FC = memo(() => {
    const { healthCheck, isOperational ,loading} = useHealthCheck();

    // 初回のみ
    useEffect(() => healthCheck(), [healthCheck]);

    return (
        <>
        <HeaderLayout>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ):(
                <Wrap>
                    {isOperational ? (
                        <p>正常に稼働しています</p>
                    ):(
                        <p>正常に稼働していません</p>
                    )}
                </Wrap>
            )}
        </HeaderLayout>
        </>
    );
});
