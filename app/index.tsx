import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <ScrollView style={Styles.scrollView}>
      
      {/* BODY */}
      <View style={Styles.body}>

        {/* LOGO CONTAINER */}
        <View style={Styles.logoContainer}>
          <Image 
            source={require("../assets/images/logo.png")} 
            style={Styles.logo} 
            resizeMode="contain" 
          />
        </View>

        {/* CONTAINER GERAL */}
        <View style={Styles.container}>
          
          <Text style={Styles.title}>Portal de Notícias</Text>

          <View style={Styles.content}>
            <Text style={Styles.welcomeTitle}>Bem-vindo ao Portal Notícias Hoje</Text>
            <Text style={Styles.welcomeSubtitle}>
              Seu portal confiável para as últimas notícias e atualizações.
            </Text>
          </View>


          {/* --- NOTÍCIA PRINCIPAL --- */}
          <View style={Styles.card}>
            <Image 
              source={require("../assets/images/noticia1.png")} 
              style={Styles.cardImage} 
            />
            <View style={Styles.cardContent}>
              <Text style={Styles.cardTitle}>
                Isenção do IR: quanto vou deixar de pagar? Quando passa a valer? Veja perguntas e respostas
              </Text>
              <Text style={Styles.cardText}>
                Presidente Lula sancionou nesta quarta-feira (26) a lei que amplia a faixa de isenção do Imposto de Renda para quem recebe até R$ 5 mil por mês e prevê descontos para rendas de até R$ 7.350 mensais.
              </Text>
            </View>
          </View>

          {/*CARD 2*/}
          <View style={Styles.card}>
            <Image 
              source={require("../assets/images/noticia2.png")} 
              style={Styles.cardImage} 
            />
            <View style={Styles.cardContent}>
              <Text style={Styles.cardTitle}>
                Veja 8 questões do Enem 2025 que foram antecipadas por estudante em live, apostilas ou grupos de WhatsApp
              </Text>
              <Text style={Styles.cardText}>
                Inep anulou somente três das questões apresentadas por Edcley Teixeira em live; apuração do g1 mostra que o estudante de medicina adiantou ao menos outros cinco itens da prova em seus materiais.
              </Text>
            </View>
          </View>

          {/*CARD 3*/}
          <View style={Styles.card}>
            <Image 
              source={require("../assets/images/noticia3.png")} 
              style={Styles.cardImage} 
            />
            <View style={Styles.cardContent}>
              <Text style={Styles.cardTitle}>
                Chanceler alemão não vai se desculpar por fala sobre Belém.
              </Text>
              <Text style={Styles.cardText}>
                Porta-voz do governo alemão disse que frase de Friedrich Merz sobre a COP30 está sendo 'apresentada de forma incriminatória' e afirmou que premiê se referia ao desejo da delegação de retornar à casa após um 'voo cansativo e um longo dia em Belém'.
              </Text>
            </View>
          </View>

          {/* FOOTER */}
          <View style={Styles.footer}>
            <Text style={Styles.footerText}>
              &copy; 2025 Portal de Notícias | Autora do Site: Laura Nobre.
            </Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

// --- STYLES ---
const Styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F0F0F0", 
  },
  body: {
    flex: 1,
    paddingBottom: 40,
  },

  // TOPO (LOGO)
  logoContainer: {
    backgroundColor: "#1A2B4C",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
  },
  logo: {
    width: 180, 
    height: 60,
  },

  // CONTAINER DO CONTEÚDO
  container: {
    padding: 16, 
    alignItems: "center",
  },

  // TEXTOS GERAIS
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A2B4C",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  content: {
    marginBottom: 25,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },

  // --- ESTILO DOS CARDS ---
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,     
    marginBottom: 20,       
    width: "100%",           
    overflow: "hidden",      
    
    // Sombra (Efeito 3D)
    elevation: 4,            
    shadowColor: "#000",    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  cardImage: {
    width: "100%",
    height: 180,             
    resizeMode: "cover",     
  },
  
  cardContent: {
    padding: 16,             
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    lineHeight: 24,
  },
  
  cardText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    textAlign: "justify",    
  },

  // RODAPÉ
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#888",
    fontSize: 12,
  }
});

export default LoginScreen;