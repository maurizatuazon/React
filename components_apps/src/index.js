import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45PM" content="Nice blog!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00AM" content="Hello there!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Yesterday at 4:45PM" content="Nice!" />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));