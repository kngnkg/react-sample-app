import { Center,Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react"
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { HeaderLayout } from "./templates/HeaderLayout";

export const UserManagement: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();

    // 初回のみ
    useEffect(() => getUsers(), [getUsers]);

    //propsで渡す関数は毎回再作成するとレンダリング効率が悪い
    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    },[onOpen, onSelectUser, users]);

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
                                id={user.id}
                                imageUrl="https://source.unsplash.com/random"
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
                    
                </Wrap>
            )}
            <UserDetailModal
                user={selectedUser}
                isOpen={isOpen}
                isAdmin={loginUser?.isAdmin}
                onClose={onClose}
            />
            </HeaderLayout>
        </>
    );
});
