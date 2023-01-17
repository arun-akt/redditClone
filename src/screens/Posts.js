import React, { useCallback, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Card
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../screens/styles";

function Feed(props, { postDatas, posts_response }) {

    const getSubreddit = useCallback(async () => {
        alert('calling')
        await postDatas(props.value);
    }, []);

    useEffect(() => {
        getSubreddit()
    }, [])

    return (
        <View>
            {posts_response.all.data.children.map((item, index) => {
                return (
                    <View style={styles.postMain}>
                        <Card>
                            <View
                                key={index}
                                style={styles.cardPosts}>
                                <View style={styles.rowDirect}>
                                    <View style={styles.colDirect}>
                                        <Text style={styles.cardName}>
                                            {item.data.subreddit_name_prefixed}
                                        </Text>
                                        <Text style={styles.cardNameSub}>
                                            {item.data.author}
                                            {item.data.created}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        alignItems: 'center',
                                    }}>
                                    <Text style={styles.cardNameSub}>
                                        {item.data.title}
                                    </Text>
                                    <Image
                                        style={{
                                            width: item.data.thumbnail_width * 2,
                                            height: item.data.thumbnail_height * 2,
                                            marginVertical: 10,
                                        }}
                                        resizeMode="cover"
                                        source={{ uri: item.data.thumbnail }}
                                    />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="chevron-circle-up" style={styles.iconStyle} />
                                        <Text style={styles.cardNameSub}>
                                            {item.data.score}
                                        </Text>
                                        <Icon
                                            name="chevron-circle-down" style={styles.iconStyle}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>
                );
            })}
        </View>
    );
}


const mapStateToProps = (state) => ({
    posts_response: state.posts_response,
})
const mapDispatchToProps = (dispatch) => ({
    postDatas: (postData) => dispatch({ type: "POSTS_REQUEST", postData })
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
