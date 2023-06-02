import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./App.css";

function MenuItem({ name, price, nutritionInfo, allergens, image }) {
	return (
		<Card className="h-100">
			<Card.Img variant="top" src={image} alt="Food Item" />
			<Card.Body className="d-flex flex-column">
				<Card.Title className="card-title">{name}</Card.Title>
				<Card.Text className="card-text">
					<strong>Price: </strong>
					{price}
				</Card.Text>
				<ListGroup variant="flush" className="mt-auto">
					<ListGroup.Item>
						<h6>Nutritional Information:</h6>
						<p>Calories: {nutritionInfo.calories} kcal</p>
						<p>Protein: {nutritionInfo.protein} g</p>
						<p>Carbs: {nutritionInfo.carbs} g</p>
						<p>Fat: {nutritionInfo.fat} g</p>
					</ListGroup.Item>
					<ListGroup.Item>
						<h6>Allergen:</h6>
						<ul>
							{allergens.map((allergen, index) => (
								<li key={index}>{allergen}</li>
							))}
						</ul>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
}

function Category({ title, foods }) {
	return (
		<div className="category my-4">
			<h2 className="mb-4">{title}</h2>
			<Row>
				{foods.map((food, index) => (
					<Col key={index} md={6} className="mb-4">
						<MenuItem {...food} />
					</Col>
				))}
			</Row>
		</div>
	);
}

const friedChicken = [
	{
		name: "Spicy Fried Chicken (2pcs)",
		price: "RM14.39",
		nutritionInfo: { calories: 540, protein: 31, carbs: 35, fat: 29 },
		allergens: ["Chicken"],
		image: "src/assets/spicy-fried-chicken.png",
	},
	{
		name: "Chicken Nuggets (6pcs)",
		price: "RM10.42",
		nutritionInfo: { calories: 270, protein: 13, carbs: 16, fat: 16 },
		allergens: ["Chicken"],
		image: "src/assets/chicken-nuggets.png",
	},
];

const drinks = [
	{
		name: "Coke",
		price: "RM5.47",
		nutritionInfo: { calories: 540, protein: 31, carbs: 35, fat: 29 },
		allergens: ["Sugar"],
		image: "src/assets/coke.png",
	},
	{
		name: "Milo",
		price: "RM7.83",
		nutritionInfo: { calories: 270, protein: 13, carbs: 16, fat: 16 },
		allergens: ["Cocoa"],
		image: "src/assets/milo.png",
	},
];

const desserts = [
	{
		name: "Chocolate Sundae",
		price: "RM5.90",
		nutritionInfo: { calories: 540, protein: 31, carbs: 35, fat: 29 },
		allergens: ["Chocolate"],
		image: "src/assets/chocolate-sundae.png",
	},
	{
		name: "Apple Pie",
		price: "RM4.95",
		nutritionInfo: { calories: 270, protein: 13, carbs: 16, fat: 16 },
		allergens: ["Apple"],
		image: "src/assets/apple-pie.png",
	},
];

function App() {
	return (
		<Container fluid className="bg-dark text-white">
			<header className="text-center py-5">
				<h1>Chang Wang&apos;s Menu</h1>
			</header>
			<hr className="bg-light" />
			<Row className="justify-content-center">
				<Col md={8}>
					<Category title={"Fried Chicken"} foods={friedChicken} />
					<Category title={"Drinks"} foods={drinks} />
					<Category title={"Desserts"} foods={desserts} />
				</Col>
			</Row>
			<hr className="bg-light" />
			<footer className="text-center py-3">
				<p>
					Copyright &copy; {new Date().getFullYear()} Chang Wang Ngen.
					Made with 💖 by Chang Wang Ngen.
				</p>
			</footer>
		</Container>
	);
}

export default App;
