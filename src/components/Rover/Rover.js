import React from 'react';
import { Button } from '../../globalStyles';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {
  RoverSection,
  RoverWrapper,
  RoverHeading,
  RoverContainer,
  RoverCard,
  RoverCardInfo,
  RoverCardID,
  RoverCardFeatures,
  RoverCardFeature,
  Img
} from './Rover.element';

class Rover extends React.Component {
  state = {
      loading: true,
      images: [],
  };

  async componentDidMount() {
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=FIsR5IC8kgvL0obAL70jXoYG5hKG9VCVNzgzFviL'
      const response = await fetch(url);
      const data= await response.json();
      this.setState({ images: data.photos, isLiked:new Array(data.photos.length).fill(false), loading: false });
      console.log(this.state);
  }

  render() {
      if (this.state.loading) {
          return <div>loading...</div>;
      }
      if (!this.state.images) {
          return <div>didn't find image</div>
      }

        return (
          <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <RoverSection>
              <RoverWrapper>
                <RoverHeading>Mars Rover</RoverHeading>
                <div>
                    {this.state.images.map((image, idx) => (
                    <div className={`some-image-${idx}`} key={`some-image${idx}`}>
                      <RoverContainer>
                          <RoverCard to='/Shopify/'>
                            <RoverCardInfo>
                              <RoverCardID>Photo ID: {image.id}</RoverCardID>
                              <RoverCardFeatures>
                                <Img src={image.img_src} />
                                <RoverCardFeature>{image.rover.name} Rover</RoverCardFeature>
                                <RoverCardFeature>{image.camera.full_name}</RoverCardFeature>
                                <RoverCardFeature>{image.earth_date}</RoverCardFeature>
                              </RoverCardFeatures>
                              <Button primary id={image.id} className={`some-button-${idx}`} onClick={() => {
                                this.setState((current)=>{
                                  const newState={...current};
                                  const isLiked = newState.isLiked;
                                  isLiked[idx] = !isLiked[idx];
                                  return {
                                    ...newState,
                                    isLiked: [...isLiked]
                                  }
                                })
                              }}>{this.state.isLiked[idx] ? <FaHeart/> : <FaRegHeart/>}</Button>
                            </RoverCardInfo>
                          </RoverCard>
                        </RoverContainer>
                      </div>
                    ))}
                   </div>
                </RoverWrapper>
              </RoverSection>
            </IconContext.Provider>
        );
      }
    }

export default Rover



