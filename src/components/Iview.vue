<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
  margin-left: 130px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </MenuItem>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="stats-bars"></Icon>
                                统计分析
                            </template>
                            <MenuGroup title="使用">
                                <MenuItem name="3-1">新增和启动</MenuItem>
                                <MenuItem name="3-2">活跃分析</MenuItem>
                                <MenuItem name="3-3">时段分析</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="留存">
                                <MenuItem name="3-4">用户留存</MenuItem>
                                <MenuItem name="3-5">流失用户</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="4">
                            <Icon type="settings"></Icon>
                            综合设置
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <Button type="primary" @click="open(false)">Open notice</Button>
                        <Button @click="open(true)">Open notice(only title)</Button>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
