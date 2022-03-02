import React from 'react'
import { Button } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

function Test({count}) {
    const dispatch = useDispatch();

    const get = () => {

    };

    const selector = useSelector(state => state.auth);
  
    return (
        <div>
            <Button onPress={()=>get()}>Test button</Button>
            {selector.token}
        </div>
    )
}

export default Test;
