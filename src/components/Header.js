import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link'

const List=styled.ul`
	height: 49px;
	display:flex;
	justify-content:space-around;
	align-items: center;
	padding: 0;

`

class Header extends React.Component {
	render(){
		return(
				<Row>
					<Col lg={12}>
						<nav>
							<List>
								<Link link="#" text="Вызов мастера" />
								<Link link="#" text="Прайс на ремонт" />
								<Link link="#" text="Наши примущества" />
								<Link link="#" text="Схема работы" />
								<Link link="#" text="Отзывы клиентов" />
								<Link link="#" text="Примеры работ" />
								<Link link="#" text="Контакты" />
							</List>
						</nav>
					</Col>
				</Row>
			);
	}

}

export default Header