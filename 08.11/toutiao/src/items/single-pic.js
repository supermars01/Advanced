/**
 * @file 单图模板文件
 * @author jinxing
 */

import Component from './component'

export default class SinglePic extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { data } = this.props
		return '<div>我是单图模板</div>'
	}
}