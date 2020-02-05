import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  TotensContainer,
  Title,
  Text,
  Img,
  ContainerTotenImage,
  ButtonRef
} from "./styles";
import Header from "../../components/Header";
import marker from "../../assets/marker.png";
import positionMarker from "../../assets/procurando.png";
import candelaria from "../../assets/candelaria.png";
import arco from "../../assets/arco.png";
import teatro from "../../assets/teatro.png";

const { height, width } = Dimensions.get("window");

export default class Map extends Component {
  state = {
    yourPosition: [
      {
        id: 1,
        latitude: -22.9044889,
        longitude: -43.177371
      }
    ],

    totens: [
      {
        id: 1,
        title: "Arco do Teles",
        address: "Endereço: Praça Quinze de Novembro, 34 A - Centro",
        description:
          "O totem localizado no arco do Teles comporta apenas lixos menores (celulares, mouses etc...)",
        image: arco,
        latitude: -22.9027744,
        longitude: -43.1768149
      },
      {
        id: 2,
        title: "Candelária",
        address: "Endereço: Praça Pio X, s/n - Centro",
        description:
          "O totem localizado na Candelária comporta apenas lixos menores (celulares, mouses etc...)",
        image: candelaria,
        latitude: -22.9004187,
        longitude: -43.1802176
      },
      {
        id: 3,
        title: "Teatro Municipal RJ",
        address: "Praça Floriano, S/N - Centro",
        description:
          "Além do nosso totem padrão o Teatro municipal disponibiliza um espaço para lixos maiores, como gabinetes, monitores, etc...",
        image: teatro,
        latitude: -22.9070183,
        longitude: -43.1789738
      }
    ]
  };

  _mapReady = () => {
    this.state.totens[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.yourPosition[0];

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <MapView
          ref={map => (this.mapView = map)}
          initialRegion={{
            latitude,
            longitude,
            longitudeDelta: 0.0095,
            latitudeDelta: 0.0021
          }}
          style={styles.MapView}
          rotateEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
          onMapReady={this._mapReady}
        >
          {this.state.totens.map(toten => (
            <MapView.Marker
              ref={mark => (toten.mark = mark)}
              title={toten.title}
              key={toten.id}
              image={marker}
              coordinate={{
                latitude: toten.latitude,
                longitude: toten.longitude
              }}
            />
          ))}
          {this.state.yourPosition.map(position => (
            <MapView.Marker
              ref={mark => (position.mark = mark)}
              key={position.id}
              image={positionMarker}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude
              }}
            />
          ))}
        </MapView>
        <TotensContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={event => {
            const scrolled = event.nativeEvent.contentOffset.x;

            const toten =
              scrolled > 0 ? scrolled / Dimensions.get("window").width : 0;

            const { latitude, longitude, mark } = this.state.totens[toten];

            this.mapView.animateCamera(
              {
                center: {
                  latitude,
                  longitude
                }
              },
              1000
            );

            setTimeout(() => {
              mark.showCallout();
            }, 1000);
          }}
        >
          {this.state.totens.map(toten => (
            <View key={toten.id} style={styles.Toten}>
              <View style={{ width: "65%", paddingVertical: 10 }}>
                <Title>{toten.title}</Title>
                <Text>{toten.address}</Text>
                <Text style={{ color: "rgba(255,255,255,0.6)" }}>
                  {toten.description}
                </Text>
              </View>
              <ContainerTotenImage>
                <Img source={toten.image} />
                <ButtonRef>
                  <Icon name="banckward" color="#999" size={20} />
                </ButtonRef>
              </ContainerTotenImage>
            </View>
          ))}
        </TotensContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MapView: {
    alignSelf: "center",
    marginTop: 1,
    width: "100%",
    height: "65%"
  },

  Toten: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: width - 4,
    maxHeight: 200,
    backgroundColor: "transparent",
    marginRight: 8,
    marginTop: 4,
    paddingHorizontal: 10
  }
});
