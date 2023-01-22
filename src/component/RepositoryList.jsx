import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-web";
import repositories from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return(
        <FlatList data={repositories}
        itemSeparatorComponent={() => <Text>   </Text>}
        renderItem={({item: repo}) => (
            <RepositoryItem {...repo}/>
        )}>
        </FlatList>
    )
}            

export default RepositoryList;
