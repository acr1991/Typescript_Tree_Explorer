import React from "react";
type Props = {
  name: string;
  scientificName: string;
  numLikes: number;
  onLike: () => void;
};

class Tree extends React.Component<Props> {
  onLike = () => {
    this.props.incrementLike(this.props.name);
  };
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Scientific Name: {this.props.scientificName}</p>
        <p>Likes: {this.props.numLikes}</p>
        <button onClick={this.onLike}> Like </button>
      </div>
    );
  }
}
export default Tree;
