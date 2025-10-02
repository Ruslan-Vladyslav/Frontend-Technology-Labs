import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbyColored: false,
      liColored: false,
    };
  }

  toggleHobby = () => {
    this.setState({ hobbyColored: !this.state.hobbyColored });
  };

  toggleLi = () => {
    this.setState({ liColored: !this.state.liColored });
  };

  render() {
  return (
    <>
      <section>
        <h3
          id="element6"
          onClick={this.toggleHobby}
          className={this.state.hobbyColored ? "colored1" : ""}
        >
          Мої хобі
        </h3>
        <ul>
          <li
            id="element7"
            onClick={this.toggleLi}
            className={this.state.liColored ? "colored2" : ""}
          >
            Розв'язок головоломків
          </li>
          <li>Front-end розробка та C# програмування</li>
          <li>Волейбол</li>
          <li>Подорожі та прогулянки</li>
        </ul>
      </section>

      <section>
        <h3>Улюблені фільми</h3>
        <ol>
          <li>Інтерстеллар</li>
          <li>Той що біжить по лезу / Той що біжить по лезу 2049</li>
          <li>Шалений Макс: Дорога гніву</li>
          <li>Матриця: трилогія</li>
        </ol>
      </section>
    </>
  );
}
}

export default Content;
