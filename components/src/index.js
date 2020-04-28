import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Mimoso"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.avatar()}
                    commentText="Noice!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:42PM"
                    avatar={faker.image.avatar()}
                    commentText="Cwel!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Rita"
                               timeAgo="Today at 4:33PM"
                               avatar={faker.image.avatar()}
                               commentText="Noice noice noice!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Beto"
                    timeAgo="Today at 4:24PM"
                    avatar={faker.image.avatar()}
                    commentText="Omg..."/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))
