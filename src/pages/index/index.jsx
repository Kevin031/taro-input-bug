import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>测试一下数字输入框</Text>
        <View style={{ border: 'solid 1px #ddd', padding: '10px 30px' }}>
          <Input type="Number" />
        </View>
      </View>
    )
  }
}
