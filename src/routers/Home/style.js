import styled from 'styled-components'
import rightPng1 from '../../statics/2.png';
import rightPng2 from '../../statics/3.png';
export const HomeWrapper = styled.div`
    width:960px;
    margin:0px auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:640px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    float:right;
    width:280px;
`;
export const TopicWrapper = styled.div`
    padding:20px 0px 10px 0px;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    padding-right:10px;
    height:32px;
    line-height:32px;
    margin-left:18px; 
    background:#f7f7f7;
    font-size:14px;
    margin-bottom:18px;
    color:#000;
    border:1px solid #dcddcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0px;
    border-bottom:1px solid #bcbcbc;
    .pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-sixe:24px;
        line-height:18px;
        color:#999;
    }
`;
export const RecommenWarpper = styled.div`
    margin:30px 0px;
    width:280px;
`;
export const RecommenItem = styled.div`
    height:50px;
    //background:url(${(props) => props.imgUrl}) ;
    background:url(${rightPng1});
    width:280px;
    background-size:contain;
    background-repeat:no-repeat;
`;
export const RecommenItem1 = styled.div`
    height:50px;
    //background:url(${(props) => props.imgUrl}) ;
    background:url(${rightPng1});
    width:280px;
    background-size:contain;
    background-repeat:no-repeat;
`;
export const RecommenItem2 = styled.div`
    height:50px;
    //background:url(${(props) => props.imgUrl}) ;
    background:url(${rightPng2});
    width:280px;
    background-size:contain;
    background-repeat:no-repeat;
`;
export const WriterWarpper = styled.div`
    height:300px;
    line-height:300px;
    border:1px solid #dcdcdc;
    width:278px;
    border-radius:3px;
    text-align:center;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0px;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    text-align:center;
    cursor:pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    background:#fafafa;
`;