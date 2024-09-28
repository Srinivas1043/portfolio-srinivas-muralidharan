import streamlit as st
from pyvis.network import Network
import networkx as nx
import streamlit.components.v1 as components

# Page configuration
st.set_page_config(page_title="Srinivas Muralidharan Portfolio", layout="wide", initial_sidebar_state="expanded")

# Sidebar details
st.sidebar.title("Contact Me")
st.sidebar.info(
    """
    📞 +31620626523  
    📧 sm1043@gmail.com  
    [LinkedIn](https://www.linkedin.com/in/srinivas-m-8019ba199/)
    """
)

# Main title and introduction
st.title("Srinivas Muralidharan")
st.subheader("Data & AI Architect | Machine Learning Specialist | NLP Researcher | Freelancer")

st.markdown(
    """
    Welcome to my portfolio! I am passionate about creating intelligent data systems and applying AI to solve real-world problems, particularly in healthcare and business. Below is a knowledge graph of my career, skills, and side projects.
    """
)

# Knowledge Graph Representation using PyVis
st.header("🔍 About Me - Knowledge Graph")

# Create a PyVis network object
knowledge_graph = Network(height="500px", width="100%", directed=True)

# Define nodes and edges
nodes = [
    ("Srinivas Muralidharan", "Me"),
    ("AniCura", "Data & AI Architect at AniCura"),
    ("FrieslandCampina", "Data & Analytics Specialist at FrieslandCampina"),
    ("Side Projects", "Side Projects"),
    ("Magknowlia GPT-4 Project", "Email Generator (GPT-4)"),
    ("Focus Flow System", "Focus Flow System"),
    ("Knowledge Graph Research", "Knowledge Graph & NLP Research"),
    ("Evolutionary Algorithms", "Evolutionary Algorithms Project")
]

edges = [
    ("Srinivas Muralidharan", "AniCura"),
    ("Srinivas Muralidharan", "FrieslandCampina"),
    ("Srinivas Muralidharan", "Side Projects"),
    ("Side Projects", "Magknowlia GPT-4 Project"),
    ("Side Projects", "Focus Flow System"),
    ("Side Projects", "Knowledge Graph Research"),
    ("Side Projects", "Evolutionary Algorithms")
]

# Add nodes and edges to the graph
for node in nodes:
    knowledge_graph.add_node(node[0], label=node[1])

for edge in edges:
    knowledge_graph.add_edge(edge[0], edge[1])

# Set physics (optional, makes the graph more dynamic)
knowledge_graph.set_options("""
var options = {
  "physics": {
    "forceAtlas2Based": {
      "gravitationalConstant": -50,
      "centralGravity": 0.005,
      "springLength": 230,
      "springConstant": 0.18,
      "damping": 0.8,
      "avoidOverlap": 1
    },
    "maxVelocity": 50,
    "solver": "forceAtlas2Based",
    "timestep": 0.35,
    "stabilization": {
      "enabled": true,
      "iterations": 1000,
      "updateInterval": 25
    }
  }
}
""")

# Save the graph to an HTML file and display it
knowledge_graph.save_graph("knowledge_graph.html")

# Use streamlit's components to render the HTML file
with open("knowledge_graph.html", "r", encoding="utf-8") as f:
    graph_html = f.read()

components.html(graph_html, height=550)

st.write("""
This knowledge graph showcases the core areas of my career: my roles at AniCura and FrieslandCampina, as well as my side projects, including the email generator using GPT-4, focus flow system, and ongoing research in knowledge graphs and NLP.
""")

# Interactive Tabs for Career Sections
tab1, tab2, tab3 = st.tabs(["Professional Experience", "Side Projects", "Skills & Education"])

# Professional Experience Section
with tab1:
    st.header("Professional Experience")
    
    with st.expander("🔍 Data & AI Architect at AniCura"):
        st.write("""
        As a Data & AI Architect at AniCura, I lead various data and AI initiatives across the company, including:
        
        - **Referral Project:** Architected a comprehensive system to analyze referral patterns for better business insights.
        - **BERT Product Classifier:** From model architecture to building the end-to-end engineering pipeline for product classification.
        - **Consent Management Project:** Ensured Salesforce data synchronization with client details for managing patient data efficiently.
        - **Google Reviews Project:** Managed the entire data pipeline from extraction to Power BI reporting for actionable insights.
        - **Competitor Pricing Project:** Automated data extraction and comparison processes to track competitor pricing.
        - **Azure & Databricks Expertise:** Extensive work on Azure and Databricks for solving data issues, validations, job management, and overall data optimization.
        """)

    with st.expander("🔍 Data & Analytics Specialist at FrieslandCampina (Jan 2023 - Apr 2024)"):
        st.write("""
        During my time at FrieslandCampina, I worked on:
        
        - **Enhancing Data Engineering Library:** Improved the Generic Components library by incorporating Python and PySpark.
        - **Codebase Refactoring:** Optimized the library's codebase for various data engineering use cases.
        - **Collaborations with Domain Teams:** Provided support and guidance to multiple teams on how to utilize the Generic Components library effectively.
        - **Data Engineering Role:** Prepared data for Power BI reports and other analytics needs as part of the MNQ team.
        - **TDD Development:** Played a key role in developing version 2.0 of the Generic Components library using Test-Driven Development.
        - **Pipeline Deployment:** Facilitated smooth integration of data pipelines into the existing data ecosystem.
        """)

# Side Projects Section
with tab2:
    st.header("Side Projects")
    
    st.subheader("💡 Email Generator Using GPT-4 (Magknowlia Freelancer)")
    st.write("""
    Developed an email generator using GPT-4 to create personalized emails based on user information. This tool generates multiple emails tailored for sales and marketing teams at Euretos, helping them scale their outreach efforts effectively.
    """)

    st.subheader("📚 Focus Flow System (In Progress)")
    st.write("""
    Developing a real-time eye-tracking system to improve focus while reading. The system integrates multiple-choice questions (MCQs) to assess comprehension and provide valuable reading analytics.
    """)

    st.subheader("🔍 Knowledge Graph and NLP Research")
    st.write("""
    Researching a patent-pending Knowledge Graph and NLP model designed to process medical abstracts. This model classifies text into categories such as disease, cause, symptoms, treatment, diagnosis, and prognosis, enabling advanced medical data analysis.
    """)

    st.subheader("🔧 Evolutionary Algorithms in Game-Like Environment")
    st.write("""
    Implementing neuroevolutionary approaches using Genetic Algorithms and Memetic Algorithms to optimize a neural network controller for game-like environments. The project focuses on balancing exploration and exploitation in evolutionary strategies.
    """)

# Skills & Education Section
with tab3:
    st.header("Skills & Education")
    
    # Skills formatted into columns
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("Skills")
        st.write("""
        **Programming Languages:** Python, C#, SQL, JavaScript, PHP, R  
        **Frameworks & Tools:** TensorFlow, PyTorch, Flask, Django, Angular, ASP.NET, Azure, Databricks  
        **AI & Data Expertise:** Data Pipelines, NLP (BERT, GPT-4), Knowledge Graphs, Deep Learning, TDD  
        """)
    
    with col2:
        st.subheader("Education")
        st.write("""
        - **Master of Science in Artificial Intelligence** (Vrije Universiteit Amsterdam, 2019-2021)  
        - **Bachelor of Technology in Computer Science** (SRM Institute of Science and Technology, 2014-2018)  
        """)

        # Certifications
        st.subheader("Certifications")
        st.write("""
        - **AI & ML Specialization** - DataCamp  
        - **Deep Learning** - Coursera  
        """)

# Footer
st.markdown("---")
st.markdown("© 2024 Srinivas Muralidharan | Made with Streamlit")

# Optional: Add Dark Mode
st.sidebar.checkbox("🌙 Dark Mode")
if st.sidebar.checkbox("Dark Mode"):
    st.write("Switching to Dark Mode soon!")  