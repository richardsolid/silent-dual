import React from "react";
import styled from "styled-components";

//grid:
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//Assets
import variables from "../../assets/styles/variables";

//styles:
import { breakpoints } from "../../assets/styles/breakpoints";

//data:
import data from "../../data";

//images:
import Model1 from "../../images/model1.png";
import Model2 from "../../images/model2.png";
import Model3 from "../../images/model3.png";
import downloadIcon from "../../images/download_icon.svg";

const Title = styled.h2`
	color: rgb(0, 0, 0);
	font-family: DINBold;
	font-size: 33px;
	line-height: 39px;
	text-align: center;
	width: 100%;
	margin: 100px auto 60px;

	@media screen and (min-width: ${breakpoints.tablet}px) {
		margin: 120px auto 80px;
	}
`;

const ModelosContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto 45px;

	@media screen and (min-width: ${breakpoints.tablet}px) {
		justify-content: space-between;
	}
`;

const ModeloCard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	flex-basis: 100%;
	width: 100%;
	min-width: 300px;
	max-width: 350px;
	box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
	margin: 0 auto 20px;

	@media screen and (min-width: ${breakpoints.tablet}px) {
		flex-basis: 30%;
	}
`;

const ModeloImageBox = styled.div`
	background: #eceded;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModeloImage = styled.img``;

const ModeloTitle = styled.h3`
	font-size: 16px;
	font-family: DINBold;
	line-height: 24px;
	margin: 30px auto 8px;
`;

const ModeloDescription = styled.div`
	font-size: 16px;
	font-weight: light;
	line-height: 24px;
	padding: 20px auto;
	margin: 0 auto 25px;
`;


const DownloadButtonContainer = styled.a`
	background: ${variables.primary};
	color: white;
	margin: 40px auto 40px;
	border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  
	display: flex;
  flex-wrap: nowrap;

  transition: .2s;

  &:hover,
  &:focus {
    background: ${variables.primaryDark};
  }
`;

const LeftButton = styled.div`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
  text-align: center;
  font-weight: bold;

  padding: 16px 20px;

`;

const DonwloadIconBox = styled.div`
	border-left: 1px solid white;
	display: flex;
	align-items: center;
  justify-content: center;

  padding: 20px;
`;

const Modelos = () => {
	const { modelos } = data;

	const chooseImage = i => {
		if (i === 0) return Model1;
		else if (i === 1) return Model2;
		else if (i === 2) return Model3;
	};

	return (
		<section id="modelos">
			<Wrapper>
				<Row>

					<Column xs={12}>
						<Title>{modelos.title}</Title>
					</Column>

					<ModelosContainer>
						{modelos.cards.map((modelo, i) => (
							<ModeloCard key={i}>
								<ModeloImageBox>
									<ModeloImage src={chooseImage(i)} alt="modelo image" />
								</ModeloImageBox>
								<ModeloTitle>{modelo.title}</ModeloTitle>
								<ModeloDescription>
									<p>{modelo.description.sizes}</p>
									<p>{modelo.description.power}</p>
								</ModeloDescription>
							</ModeloCard>
						))}
					</ModelosContainer>


					<Column xs={12}>
						<DownloadButtonContainer href="#" target="_blank" >
							<LeftButton>{modelos.button}</LeftButton>
							<DonwloadIconBox>
								<img src={downloadIcon} alt="download icon" />
							</DonwloadIconBox>
						</DownloadButtonContainer>
					</Column>


				</Row>
			</Wrapper>

		</section>
	);
};

export default Modelos;
