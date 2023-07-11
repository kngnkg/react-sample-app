import axios from "axios";
import { useCallback, useState } from "react";

export const useHealthCheck = () => {
    const [loading, setLoading] = useState(false);
    // 稼働中かどうかを表す
    const [isOperational, setIsOperational] = useState(false);

    const healthCheck = useCallback(() => {
        setLoading(true);
        axios.get("http://docker.for.mac.localhost:18000/health")
        .then((res) => {
            if(res.status === 200) {
                // 正常稼働
                console.log(`正常に稼働しています。ステータスコード：${res.status}`)
                setIsOperational(true);
            } else {
                console.error(`正常に稼働していません。ステータスコード：${res.status}`)
            }
        })
        .catch((err) => {
            console.error(`APIサーバーとの通信に失敗しました: ${err}`)
             })
        .finally(() => setLoading(false));
    },[]);

    return { healthCheck, loading, isOperational }
};