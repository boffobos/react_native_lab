import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native-elements';
import { FONT_BOLD, PRIMARY_COLOR_LIGHT, SAVINGS, CHECKING } from '../../config/index';
import { Button } from 'react-native-elements';
import { ParamListBase } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Home</Text>
		</View>
	);
}

interface IHomeProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}

export const Home = ({navigation}: IHomeProps) => {
	// const height = useBottomTabBarHeight();
	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView style={{marginHorizontal: 10}}>
					{/* <View >
						<Button style={styles.btn} title={SAVINGS.name} onPress={() => navigation.navigate(SAVINGS.name, {subtitle: 'best test sub'})} />
						<Button style={styles.btn} title={CHECKING.name} onPress={() => navigation.navigate(CHECKING.name, {subtitle: 'apart test sub'})} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home1</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home2</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home3</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home4</Text>
					</View> */}
					<Text style={{fontSize: 24}}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quisquam voluptatum, tempore minus ducimus delectus vitae pariatur animi ad? Laudantium sapiente a necessitatibus beatae. Necessitatibus recusandae non ea iure est mollitia cupiditate, velit, libero numquam, consectetur minus repellat minima quisquam at id. Officia reprehenderit ab placeat debitis repellat sit iusto asperiores dicta provident, quam aut quaerat, ex esse odio? Harum aliquam ad sed maiores laborum. Dolor atque quidem, culpa expedita voluptatum praesentium quam a perferendis esse veritatis tempore aliquid ut natus dolorum, eaque dicta facere accusamus mollitia inventore est placeat quasi quibusdam exercitationem. Deserunt fugit tempore, cumque vel animi dicta eius maxime magni tempora officia, veritatis suscipit accusamus voluptate minus ratione quas iste necessitatibus sed libero. Dolore assumenda reiciendis omnis quasi cum ratione nisi, at asperiores fuga necessitatibus laboriosam doloremque distinctio dolor adipisci impedit similique molestiae esse ipsa iure. Laborum soluta perferendis consequuntur omnis impedit enim deserunt, voluptates corporis quam in ea, natus ad, non vero repudiandae. Earum minus sed quia enim doloribus ab expedita a blanditiis. Cumque earum autem soluta enim. Dolores distinctio alias accusantium, officiis quae sapiente temporibus quia earum placeat magni debitis praesentium ipsam ab ducimus adipisci dolorem reiciendis saepe voluptatem nostrum sed aut in ipsum non! Laborum enim blanditiis, voluptates voluptatem sed quae fugiat voluptas, alias vero aliquam, quaerat assumenda? Voluptates corporis ratione amet hic earum deserunt veritatis dolorum nulla laborum voluptatum fugiat, laudantium perspiciatis maxime dignissimos itaque ab provident tempora molestiae unde. Laboriosam, dolore. Corrupti qui eligendi dolore velit nostrum laboriosam, sequi tempore voluptas aut tenetur omnis alias veritatis accusamus. Facere mollitia laborum fuga deserunt magnam quisquam laboriosam dolorum, a tempora rem sequi voluptates, nulla voluptate. Doloremque, natus totam! Veniam earum suscipit enim explicabo tenetur ipsa possimus saepe velit deserunt corrupti iste fugiat facilis delectus quod tempora ullam, rem ipsam reiciendis hic vel, iure alias laboriosam voluptatum quasi! Illo voluptatem neque quia atque iusto ducimus ullam ipsam. Nemo laudantium corporis omnis est suscipit similique, totam hic laboriosam incidunt non vitae voluptatibus. Culpa exercitationem nihil aliquam alias, voluptates ipsa deserunt consectetur temporibus aspernatur dicta nam doloremque quis error sequi eligendi soluta expedita voluptate aliquid cum beatae pariatur id at voluptas? Debitis necessitatibus distinctio error enim natus recusandae nisi rem quia, quae ipsam repudiandae labore, officiis sunt cum nam et! Perspiciatis distinctio nisi reiciendis provident, corporis recusandae ullam cumque quo aliquid dolore, commodi ipsum ea eligendi quas nobis iste? Quo ut veritatis dolorum. Tenetur a ducimus aliquid velit adipisci! Eum quae error, incidunt quia fugiat ipsam repudiandae ab? Rerum porro quaerat natus debitis, vitae cumque, libero suscipit nobis, laudantium quam nulla eaque fuga obcaecati praesentium. Doloribus assumenda ipsa animi fuga tempora! Libero impedit repudiandae molestias totam dicta. Iusto unde molestiae aut optio maiores hic distinctio, quasi dolor doloremque, magni quaerat, et nihil tempore nobis quibusdam consequatur itaque excepturi magnam? Sapiente natus expedita nam quo nemo fugit rerum voluptates est minus. Assumenda modi nisi earum sequi fuga repellendus veritatis. Magni odio necessitatibus quidem veritatis velit libero nisi, corrupti tempore alias quaerat! Ea eligendi nam natus. Accusamus numquam in, vero nemo laboriosam ipsum illum omnis quibusdam unde, repellat tenetur ducimus ipsa excepturi ipsam quas labore deleniti. Tempora voluptate dolore saepe repellendus itaque quas. Repellat, voluptates. Distinctio, reiciendis quis! Aliquid, quibusdam! Repellat voluptatibus ipsa optio quas in inventore quasi dignissimos esse cum iste odit aperiam obcaecati maiores ab quos, minus quam enim dolorem numquam. Rerum natus, neque velit laudantium ad dolorem accusamus non accusantium vero laboriosam quasi tempore nesciunt asperiores recusandae et minus officia. Modi vitae aliquid quasi explicabo debitis, laudantium consectetur unde tempore ipsa natus voluptates dolorem iste architecto assumenda. Dolorum vero porro veniam provident illo veritatis natus quos nulla qui maxime repudiandae, soluta aperiam suscipit esse iste architecto molestias. Enim, facere. Id aliquid nostrum veniam doloremque suscipit et distinctio, est fugit consequuntur possimus quia corrupti ipsum officiis ab quas optio at eos porro? Dolores in cumque explicabo alias minus iusto, consequatur amet. Optio similique eos sit nihil, repellat laboriosam commodi ab nobis dicta autem quam fugit nulla maiores alias facilis suscipit a harum voluptatibus dolore id esse quod. Debitis repellat sapiente est voluptate eius corrupti unde voluptatem consequuntur vel architecto, at molestias, alias aliquam maiores esse omnis ea pariatur? Amet, in praesentium? Cupiditate minima laboriosam quaerat perferendis unde officiis, deleniti fugiat quibusdam incidunt id nobis placeat vitae? Rerum animi voluptatem fugit illo quod. Asperiores quos, officia nihil culpa quisquam non cum dolorem maiores beatae omnis nesciunt veritatis necessitatibus totam minus laudantium nulla at corrupti provident. Nulla nihil ipsa commodi dolore. Eos odit maiores quas asperiores! Voluptate, molestias itaque quibusdam laudantium aspernatur neque suscipit ducimus illum? Voluptates enim at odit sequi delectus, repudiandae ex sit. Exercitationem, sequi corporis consequatur possimus deleniti, corrupti soluta et a natus maxime enim optio similique impedit explicabo quo distinctio numquam perferendis voluptatum fugit eveniet! Recusandae eum omnis, veniam dignissimos blanditiis, quas ab quidem, nihil saepe veritatis quis repudiandae delectus iure perspiciatis vero dolorem voluptas ipsum ipsa a minus autem nam? Praesentium quae minus neque ex exercitationem repellendus esse alias? Rem reprehenderit amet impedit explicabo sapiente, atque accusamus sint quasi cupiditate, dolores recusandae voluptate. Dolores recusandae commodi magnam iure ducimus, laboriosam ea fugit, quas dolorum quidem aut officia? Sint quis necessitatibus qui, totam voluptatibus magni veritatis? Molestiae delectus corporis at, non sapiente voluptatum accusamus asperiores natus quidem harum, obcaecati minus, corrupti sit inventore fuga! Modi quae cum a voluptatem laborum eum nobis ducimus velit. Temporibus dicta odio quia itaque? Beatae iste ipsam est facere laudantium laborum omnis necessitatibus autem dolor iure suscipit adipisci blanditiis, labore numquam praesentium dolorum veritatis earum natus facilis repellendus possimus corporis temporibus excepturi ipsa. Illo sapiente aliquid voluptatibus nemo molestiae minus iste asperiores voluptatum mollitia. Neque illo enim, officia cupiditate fuga debitis accusamus! Non dolorem alias pariatur quia ab dolorum quae itaque veniam, iure rem doloremque, a error consequatur. Maxime, facere quae saepe amet doloribus possimus, necessitatibus nam quod illum voluptatum minus, nisi deleniti? Quas officiis quidem ducimus incidunt rerum possimus a illo sint deserunt nisi vitae labore temporibus et voluptate sed nihil eum corporis mollitia, illum eaque. Quam, quis numquam!
					</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: PRIMARY_COLOR_LIGHT,
		marginBottom: 25,
	},
	text: {
		textAlign: 'center',
		fontFamily: FONT_BOLD,
		fontSize: 30,
	},
	btn: {
		// color: 'black',
		backgroundColor: 'orange',
		width: '33%',
		alignSelf: 'center',
		margin: 20,

	}
});
