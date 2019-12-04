import React from "react";
import styled from "styled-components";

//grid:
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//data:
import data from "../../data";

//images:
import Model1 from "../../images/model1.png";
import Model2 from "../../images/model2.png";
import Model3 from "../../images/model3.png";
import downloadIcon from "../../images/download_icon.svg";

const Title = styled.h2`
	color: rgb(0, 0, 0);
	font-weight: bold;
	font-size: 33px;
	line-height: 39px;
	text-align: center;
	width: 100%;
`;

const ModelosContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto 65px;
`;

const ModeloCard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	flex-basis: 30%;
	box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
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
	font-weight: bold;
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

const DownloadButton = styled.button`
	background: #ea2c13;
	color: white;
	margin: 0 auto 40px;
	border-radius: 3px;
	padding: 10px 55px;
	font-size: 16px;
	line-height: 24px;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
`;

const donwloadIconBox = styled.div`
	position: relative;
	img {
		right: 0;
		top: 0;
		height: 85%;
		border-left: 1px solid white;
		padding-left: 10px;
		position: absolute;
		display: inline-block;
	}
`;

const Specs = () => {
	const { modelos } = data;

	const chooseImage = i => {
		if (i === 0) return Model1;
		else if (i === 1) return Model2;
		else if (i === 2) return Model3;
	};

	return (
		<section id="specs">
			<Wrapper>
				<Row>
					<Column xs={12}>
						<Title>{modelos.title}</Title>
					</Column>
				</Row>
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
				<DownloadButton>
					{modelos.button}{" "}
					<donwloadIconBox>
						<img src={downloadIcon} alt="download icon" />
					</donwloadIconBox>
				</DownloadButton>
			</Wrapper>
		</section>
	);
};

export default Specs;
