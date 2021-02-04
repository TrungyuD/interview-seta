import React from 'react'
import { connect } from 'react-redux';
import PostList from './PostList';
import {Container, Table, Button} from 'react-bootstrap';
const PostContainer = (props) => {
    const {posts = []} = props;
    return (
        <div>
            <Container> 
                <div>
                    <h3 style={{textAlign:"center"}}>Post List</h3>
                    <Button></Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>UserId</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostList posts={posts}/>
                    </tbody>
                </Table>
            </Container>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        posts: state.posts.post
    }
}
export default connect(mapStateToProps, null)(PostContainer);
