/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './belowPage.style';


export default class BelowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {

    }
    componentDidMount() {

    }


    render() {
        return (
            <View style={style.container}>
              <View style={style.locinfobar}>
                <Text style={{fontSize:15}}>January 19th 3:32pm</Text>
                <Text  style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>
              </View>
              <View style={style.threedays}>
                  <Text  style={{fontSize:20, fontWeight:'bold'}}>expectation</Text>
              </View>
              <View style={style.alram}>
                  <Text  style={{fontSize:20, fontWeight:'bold'}}>Alram setting</Text>
              </View>
            </View>
        )
    }
}
