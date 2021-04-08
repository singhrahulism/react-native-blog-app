import React, {useContext} from 'react' ;
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native' ;
import BlogContext from '../context/blogProvider' ;
import {MaterialCommunityIcons} from '@expo/vector-icons' ;

const HomeScreen = () =>
{
    const {data, addBlogPost, deleteBlogPost} = useContext(BlogContext) ;

    return <View style={styles.container}>
        <Button
            title = 'Press Me to add a new blog post'
            onPress = {addBlogPost}
        />
        <FlatList
            showsVerticalScrollIndicator = {false}
            data = {data}
            keyExtractor = {blogPost => blogPost.title}
            renderItem = {({item}) => {
                return <View style={styles.blogBoxContainer}>
                            <Text style={styles.textContainer}>{item.title} - {item.id}</Text>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => deleteBlogPost(item.id)} >
                            <View style={{height: 55, width: 55, alignItems: 'center', justifyContent: 'center'}}>
                                    <MaterialCommunityIcons style={{paddingRight: 5}} name='delete' size={25} />
                            </View>
                            </TouchableOpacity>
                    </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        // alignItems: 'center'
    },
    blogBoxContainer:
    {
        // borderColor: 'red',
        // borderWidth: 3,
        height: 60,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 12,
        marginVertical: 6,
        // paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer:
    {
        fontSize: 17,
        paddingLeft: 8
    }
})

export default HomeScreen ;