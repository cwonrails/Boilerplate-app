import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import { Link } from 'react-router-dom';

import Languages from './../languages/languages';

class ListCategories extends Component {
	render() {
	  const languagesCategories = Languages.map((language) => {
	    return (
	    	<Layout key={language.lang.toLowerCase()} className="ListLanguages-item" item xs={12} sm={4} md={3}>
	    		<Link to={"/language/" + language.lang.toLowerCase()}>
						<Paper className="ListLanguages-paper">
							<i className={language.icon}></i>
							<div>
								<span>{language.lang}</span>
							</div>
						</Paper>
					</Link>
				</Layout>
	    );
	  });

	  return (
	  	<Layout container className="ListLanguages-root">
				{languagesCategories}
		  </Layout>
	  );
	}
}

export default ListCategories;
