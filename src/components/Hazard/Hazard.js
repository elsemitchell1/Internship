import React from 'react';
import { Button } from '../../globalStyles';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {
  HazardSection,
  HazardWrapper,
  HazardHeading,
  HazardContainer,
  HazardCard,
  HazardCardInfo,
  HazardCardPlan,
  HazardCardFeatures,
  HazardCardFeature,
  Img
} from './Hazard.element';

class Hazard extends React.Component {
  state = {
      loading: true,
      images: []
  };

  async componentDidMount() {
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=FIsR5IC8kgvL0obAL70jXoYG5hKG9VCVNzgzFviL'
      const response = await fetch(url);
      const data= await response.json();
      this.setState({ images: data.photos, isLiked:new Array(data.photos.length).fill(false), loading: false });
      console.log(data);
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
            <HazardSection>
              <HazardWrapper>
                <HazardHeading>Hazard Camera</HazardHeading>
                <div>
                    {this.state.images.map((image, idx) => (
                    <div className={`some-image-${idx}`} key={`some-image${idx}`}>
                    <HazardContainer>
                        <HazardCard to='/Apod'>
                          <HazardCardInfo>
                            <HazardCardPlan>Photo ID: {image.caption}</HazardCardPlan>
                            <HazardCardFeatures>
                              <Img src={image.img_src} />
                              <HazardCardFeature>{image.rover.name} Rover</HazardCardFeature>
                              <HazardCardFeature>{image.camera.full_name}</HazardCardFeature>
                              <HazardCardFeature>{image.earth_date}</HazardCardFeature>
                            </HazardCardFeatures>
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
                          </HazardCardInfo>
                        </HazardCard>
                      </HazardContainer>
                    </div>
                  ))}
                </div>
              </HazardWrapper>
            </HazardSection>
           </IconContext.Provider>
        );
      }
    }

export default Hazard



