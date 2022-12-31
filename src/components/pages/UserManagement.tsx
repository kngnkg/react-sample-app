import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react"
import { useAllUsers } from "../../hooks/useAllUsers";

import { UserCard } from "../organisms/user/UserCard";
import { HeaderLayout } from "./templates/HeaderLayout";

export const UserManagement: FC = memo(() => {
    const { getUsers, users, loading } = useAllUsers();

    // 初回のみ
    useEffect(() => getUsers(), [])

    return (
        <>
        <HeaderLayout>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        // TODO: mx="auto"が効かない
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                imageUrl="https://source.unsplash.com/random"
                                userName={user.username}
                                fullName={user.name}
                            />
                        </WrapItem>
                    ))}
                    
                </Wrap>
            )}
            </HeaderLayout>
        </>
    );
});
