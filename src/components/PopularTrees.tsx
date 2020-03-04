import React from "react";
import Tree from "./Tree";
type Props = {
  onLike: (myArg: string) => void;
};
type State = {
  commonName: string;
  scientificName: string;
  trees: Array<{
    name: string;
    numLikes: number;
    scientificName: string;
  }>;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    commonName: "",
    scientificName: "",
    trees: [
      { name: "White birch", scientificName: "Betula pendula", numLikes: 4 },
      {
        name: "Weeping willow",
        scientificName: "Salix sepulcralis",
        numLikes: 7
      },
      {
        name: "London planetree",
        scientificName: "Platanus hybryda",
        numLikes: 9
      }
    ]
  };
  addTree = () => {
    this.setState({
      ...this.state,
      trees: [
        ...this.state.trees,
        {
          name: this.state.commonName,
          scientificName: this.state.scientificName,
          numLikes: Math.random() * 10
        }
      ]
    });
  };
  onLike = () => {
    console.log("hi there");
  };
  incrementNumberOfLikes = (name: string) => {
    const updatedTrees = this.state.trees.map(tree => {
      if (tree.name === name) {
        return { ...tree, numLikes: tree.numLikes += 1 };
      } else {
        return tree;
      }
    });
    this.setState({ trees: updatedTrees });
  };
  render() {
    const eachTree = this.state.trees.map(tree => (
      <Tree
        name={tree.name}
        scientificName={tree.scientificName}
        numLikes={tree.numLikes}
        incrementLike={this.incrementNumberOfLikes}
      />
    ));
    return (
      <div>
        {eachTree}
        <div>
          {
            <form
              onSubmit={e => {
                e.preventDefault();
                this.addTree();
              }}
              style={{ display: "flex" }}
            >
              <p style={{ margin: ".25rem" }}>
                <label>
                  Common name:{" "}
                  <input
                    type="text"
                    value={this.state.commonName}
                    onChange={e =>
                      this.setState({ commonName: e.target.value })
                    }
                  />
                </label>
              </p>
              <p style={{ margin: ".25rem" }}>
                <label>
                  Scientific name:{" "}
                  <input
                    type="text"
                    value={this.state.scientificName}
                    onChange={e =>
                      this.setState({ scientificName: e.target.value })
                    }
                  />
                </label>
              </p>
              <p style={{ margin: ".25rem" }}>
                <button type="submit">Add!</button>
              </p>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default PopularTrees;
