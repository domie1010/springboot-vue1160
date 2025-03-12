const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootsiiny4vh/",
            name: "springbootsiiny4vh",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootsiiny4vh/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "酒店点餐管理系统"
        } 
    }
}
export default base
