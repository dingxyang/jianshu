import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../StyleComp";
import { actionCreators } from "../store";

class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props;
    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className="article-pic" src={item.get("img")} alt=""></img>
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={getMoreList}> 加载跟多 </LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  articleList: state.getIn(["home", "articleList"])
});

const mapDispatch = dispatch => ({
  getMoreList() {
    dispatch(actionCreators.loadMoreHomeDataList());
  }
});

export default connect(mapState, mapDispatch)(List);
