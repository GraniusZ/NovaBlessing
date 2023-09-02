import {Box, CircularProgress} from "@mui/material";
import {useGetComments} from "@/hooks/feed/useGetComments";
import {CommentCard} from "./CommentCard";

export const Comments = ({postId}: { postId: number }) => {
    const {data, isLoading} = useGetComments(postId);
    return (
        data &&
        data.length > 0 && (
            <Box
                sx={{display: "flex", flexDirection: "column", gap: "24px"}}
                mt={"8px"}
            >
                {isLoading && <CircularProgress sx={{mt: "20px", mx: "auto"}}/>}
                {data.map((comment) => (
                    <CommentCard key={comment.id} comment={comment}/>
                ))}
            </Box>
        )
    );
};
