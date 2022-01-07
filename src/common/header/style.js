import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    prosition:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a`
    height:56px;
    width:100px;
    display:block;
    position:absolute;
    top:0;
    left:0;
    background:url(${logoPic});
    background-size:contain;
    
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0px auto;
    // background:#f00;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a
    }
`;
export const SearchWrapper = styled.div`

    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0px 30px 0px 20px;
    box-sizing:border-box;
    outline:none;
    border:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999
    }&.focused{
        width:300px;
    }
    &.slide-enter{
        transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width:300px;
    }
    &.slide-exit{
        transition:all .5s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const SerachInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:300px;
    padding:0px 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    // background:#ff0;
`;
export const SerachInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SerachInfoSwitch = styled.div`
    float:right;
    font-size:13px;
`;
export const SerachInfoList = styled.div`
    overflow:hidden;
`;
export const SerachInfoItem = styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    padding:0px 5px;
    line-height:20px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`;
export const Addition = styled.div`
    position: absolute;
    right:0px;
    top:0px;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0px 20px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`;

