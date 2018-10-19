import React, { PureComponent } from 'react';
import moment from 'moment';
import { Input, InputNumber, Form, DatePicker, Row, Col } from 'antd';

const FormItem = Form.Item;

class FmFyxx extends PureComponent {
  formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 13 },
  };

  colLayout = {
    sm: 24,
    md: 12,
    lg: 8,
    xxl: 6,
  };

  fieldParams = {
    // validateTrigger: 'onBlur',
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { current } = this.props;

    return (
      <div>
        <FormItem>          
          {getFieldDecorator('houseid', {initialValue: current.houseid,})(<Input type="hidden" />)}
          {getFieldDecorator('yzhid', {initialValue: current.yzhid,})(<Input type="hidden" />)}
          {getFieldDecorator('sfsz', {initialValue: current.sfsz,})(<Input type="hidden" />)}

        </FormItem>
        <Row>
          <Col {...this.colLayout}>
            <FormItem label="房屋名称" {...this.formLayout}>
              {getFieldDecorator('fwmc', {
                rules: [{ required: true, message: '请输入房屋名称' }],
                initialValue: current.fwmc,
                ...this.fieldParams,
              })(<Input placeholder="" />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="租户姓名" {...this.formLayout}>
              {getFieldDecorator('zhxm', {
                initialValue: current.zhxm,
              })(<Input placeholder="" />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="身份证号" {...this.formLayout}>
              {getFieldDecorator('sfzh', {
                initialValue: current.sfzh,
              })(<Input placeholder="" />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="电话号码" {...this.formLayout}>
              {getFieldDecorator('dhhm', {
                initialValue: current.dhhm,
              })(<Input placeholder="" />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="出租金额" {...this.formLayout}>
              {getFieldDecorator('czje', {
                initialValue: current.czje,
              })(<InputNumber min={0} step={50} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="押金" {...this.formLayout}>
              {getFieldDecorator('yj', {
                initialValue: current.yj,
              })(<InputNumber min={0} step={5} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="收租日期" {...this.formLayout}>
              {getFieldDecorator('szrq', {
                initialValue: current.szrq ? moment(current.szrq) : null,
              })(<DatePicker placeholder="请选择" format="YYYY-MM-DD" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="合同日期起" {...this.formLayout}>
              {getFieldDecorator('htrqq', {
                initialValue: current.htrqq ? moment(current.htrqq) : null,
              })(<DatePicker placeholder="请选择" format="YYYY-MM-DD" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="合同日期止" {...this.formLayout}>
              {getFieldDecorator('htrqz', {
                initialValue: current.htrqz ? moment(current.htrqz) : null,
              })(<DatePicker placeholder="请选择" format="YYYY-MM-DD" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="电起始读数" {...this.formLayout}>
              {getFieldDecorator('dscds', {
                initialValue: current.dscds,
              })(<InputNumber min={0} step={10} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="水起始读数" {...this.formLayout}>
              {getFieldDecorator('sscds', {
                initialValue: current.sscds,
              })(<InputNumber min={0} step={10} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="电本次读数" {...this.formLayout}>
              {getFieldDecorator('dbcds', {
                initialValue: current.dbcds,
              })(<InputNumber min={0} step={10} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="水本次读数" {...this.formLayout}>
              {getFieldDecorator('sbcds', {
                initialValue: current.sbcds,
              })(<InputNumber min={0} step={10} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="电费单价" {...this.formLayout}>
              {getFieldDecorator('ddj', {
                initialValue: current.ddj,
              })(<InputNumber min={0} step={0.1} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="水费单价" {...this.formLayout}>
              {getFieldDecorator('sdj', {
                initialValue: current.sdj,
              })(<InputNumber min={0} step={0.1} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="电公摊度数" {...this.formLayout}>
              {getFieldDecorator('dgtds', {
                initialValue: current.dgtds,
              })(<InputNumber min={0} step={1} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="水公摊度数" {...this.formLayout}>
              {getFieldDecorator('sgtds', {
                initialValue: current.sgtds,
              })(<InputNumber min={0} step={1} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="网络费" {...this.formLayout}>
              {getFieldDecorator('wlf', {
                initialValue: current.wlf,
              })(<InputNumber min={0} step={10} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="管理费" {...this.formLayout}>
              {getFieldDecorator('glf', {
                initialValue: current.glf,
              })(<InputNumber min={0} step={5} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="垃圾费" {...this.formLayout}>
              {getFieldDecorator('ljf', {
                initialValue: current.ljf,
              })(<InputNumber min={0} step={5} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="上月结转费" {...this.formLayout}>
              {getFieldDecorator('syjzf', {
                initialValue: current.syjzf,
              })(<InputNumber min={0} step={5} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="其它费" {...this.formLayout}>
              {getFieldDecorator('qtf', {
                initialValue: current.qtf,
              })(<InputNumber min={0} step={5} placeholder="" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col {...this.colLayout}>
            <FormItem label="备注" {...this.formLayout}>
              {getFieldDecorator('bz', {
                initialValue: current.bz,
              })(<Input placeholder="" />)}
            </FormItem>
          </Col>
        </Row>
      </div>
    );
  }
}
export default FmFyxx;
