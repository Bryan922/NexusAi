import React from 'react';
import { Document, Page, Text, StyleSheet, View, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.cdnfonts.com/s/29107/Helvetica-Font-Family/helvetica_regular.woff', fontWeight: 'normal' },
    { src: 'https://fonts.cdnfonts.com/s/29107/Helvetica-Font-Family/helvetica_bold.woff', fontWeight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: '20 30',
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1a1a1a',
    lineHeight: 1.3
  },
  header: {
    marginBottom: 10,
    textAlign: 'center'
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2
  },
  subtitle: {
    fontSize: 11,
    color: '#4B5563',
    marginBottom: 10
  },
  section: {
    marginBottom: 8
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1E40AF',
    borderBottom: '1 solid #E5E7EB',
    paddingBottom: 2
  },
  subSectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#374151'
  },
  paragraph: {
    marginBottom: 4,
    lineHeight: 1.3,
    textAlign: 'justify'
  },
  bulletPoint: {
    marginBottom: 2,
    paddingLeft: 12,
    textIndent: -8
  },
  field: {
    marginBottom: 6
  },
  label: {
    color: '#4B5563',
    marginBottom: 1
  },
  input: {
    height: 16,
    borderBottom: '1 solid #9CA3AF',
    marginBottom: 1
  },
  companyInfo: {
    marginTop: 2,
    marginBottom: 6
  },
  companyDetail: {
    marginBottom: 1,
    fontSize: 10
  },
  table: {
    width: '100%',
    marginVertical: 6
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 4
  },
  tableHeader: {
    backgroundColor: '#F3F4F6',
    fontWeight: 'bold'
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 4,
    fontSize: 10
  },
  signatureSection: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signatureBlock: {
    width: '45%'
  },
  signatureLine: {
    borderBottom: '1 solid #9CA3AF',
    marginTop: 20,
    marginBottom: 2
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 7,
    borderTop: '1 solid #E5E7EB',
    paddingTop: 6
  },
  pageNumber: {
    position: 'absolute',
    bottom: 15,
    right: 30,
    fontSize: 8,
    color: '#6B7280'
  }
});

const CompanyInfo = ({ language }) => {
  const isEnglish = language === 'en';
  return (
    <View style={styles.companyInfo}>
      <Text style={styles.companyDetail}>NexusAI Corporation</Text>
      <Text style={styles.companyDetail}>{isEnglish ? 'Registration' : 'Immatriculation'}: DED-12345</Text>
      <Text style={styles.companyDetail}>{isEnglish ? 'Address' : 'Adresse'}: Dubai Silicon Oasis, Dubai, UAE</Text>
      <Text style={styles.companyDetail}>Email: nexusai255@gmail.com</Text>
      <Text style={styles.companyDetail}>IBAN: FR76 2823 3000 0166 9334 7777 043</Text>
      <Text style={styles.companyDetail}>{isEnglish ? 'Represented by' : 'Représenté par'}: Pierre Dubois</Text>
      <Text style={styles.companyDetail}>{isEnglish ? 'Position' : 'Fonction'}: {isEnglish ? 'Chief Executive Officer' : 'Directeur Général'}</Text>
    </View>
  );
};

const PreamblePage = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logo}>NexusAI</Text>
        <Text style={styles.title}>
          {isEnglish ? 'INVESTMENT AGREEMENT' : 'CONTRAT D\'INVESTISSEMENT'}
        </Text>
        <Text style={styles.subtitle}>
          {isEnglish ? 'Reference: NEX-INV-2025' : 'Référence : NEX-INV-2025'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? 'PREAMBLE' : 'PRÉAMBULE'}
        </Text>
        <CompanyInfo language={language} />
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'NexusAI Corporation ("the Company") represents the pinnacle of artificial intelligence innovation, positioned at the forefront of the next technological revolution. Founded in 2024, the Company has rapidly established itself as a pioneer in developing advanced AI systems that transcend current technological limitations.'
            : 'NexusAI Corporation ("la Société") représente le summum de l\'innovation en matière d\'intelligence artificielle, se positionnant à l\'avant-garde de la prochaine révolution technologique. Fondée en 2024, la Société s\'est rapidement établie comme pionnière dans le développement de systèmes d\'IA avancés qui transcendent les limitations technologiques actuelles.'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? 'A. Technological Innovation' : 'A. Innovation Technologique'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'NexusAI has developed proprietary neural network architectures that demonstrate unprecedented capabilities in natural language processing, strategic decision-making, and complex problem-solving. Our systems utilize quantum-inspired algorithms, enabling processing capabilities that surpass traditional computing limitations by several orders of magnitude.'
            : 'NexusAI a développé des architectures de réseaux neuronaux propriétaires qui démontrent des capacités sans précédent en matière de traitement du langage naturel, de prise de décision stratégique et de résolution de problèmes complexes. Nos systèmes utilisent des algorithmes d\'inspiration quantique, permettant des capacités de traitement qui dépassent les limitations informatiques traditionnelles de plusieurs ordres de grandeur.'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? 'B. Market Position' : 'B. Position sur le Marché'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The global AI market is projected to reach $1.5 trillion by 2030, with NexusAI positioned to capture a significant share through its revolutionary technology. Our competitive advantages include:'
            : 'Le marché mondial de l\'IA devrait atteindre 1,5 billion de dollars d\'ici 2030, NexusAI étant positionnée pour en capturer une part significative grâce à sa technologie révolutionnaire. Nos avantages concurrentiels incluent :'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Proprietary quantum-inspired processing architecture'
          : 'Architecture de traitement propriétaire d\'inspiration quantique'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Advanced neural network designs with self-optimization capabilities'
          : 'Conceptions de réseaux neuronaux avancés avec capacités d\'auto-optimisation'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Breakthrough achievements in artificial general intelligence research'
          : 'Avancées majeures dans la recherche sur l\'intelligence artificielle générale'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Strategic partnerships with leading technology companies'
          : 'Partenariats stratégiques avec des entreprises technologiques leaders'}
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  );
};

const TermsPage = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '1. PARTIES TO THE AGREEMENT' : '1. PARTIES AU CONTRAT'}
        </Text>
        <View style={styles.field}>
          <Text style={styles.label}>
            {isEnglish ? 'This Agreement is made between:' : 'Le présent contrat est conclu entre :'}
          </Text>
          <View style={styles.input} />
          <Text style={styles.label}>
            {isEnglish ? '(hereinafter referred to as "the Investor")' : '(ci-après dénommé "l\'Investisseur")'}
          </Text>
        </View>
        <Text style={styles.paragraph}>
          {isEnglish ? 'AND' : 'ET'}
        </Text>
        <CompanyInfo language={language} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '2. INVESTMENT TERMS' : '2. CONDITIONS D\'INVESTISSEMENT'}
        </Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Description' : 'Description'}
            </Text>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Details' : 'Détails'}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Investment Amount' : 'Montant de l\'investissement'}
            </Text>
            <Text style={styles.tableCell}>USD _________________</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Equity Percentage' : 'Pourcentage de participation'}
            </Text>
            <Text style={styles.tableCell}>1.00%</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Share Class' : 'Classe d\'actions'}
            </Text>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Class A Common Stock' : 'Actions ordinaires de classe A'}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {isEnglish ? 'Lock-up Period' : 'Période de blocage'}
            </Text>
            <Text style={styles.tableCell}>
              {isEnglish ? '24 months' : '24 mois'}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  );
};

const RightsPage = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '3. INVESTOR RIGHTS AND OBLIGATIONS' : '3. DROITS ET OBLIGATIONS DE L\'INVESTISSEUR'}
        </Text>
        
        <Text style={styles.subSectionTitle}>
          {isEnglish ? '3.1 Information Rights' : '3.1 Droits d\'Information'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The Investor shall be entitled to receive:'
            : 'L\'Investisseur aura le droit de recevoir :'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Quarterly financial statements and performance reports'
          : 'États financiers trimestriels et rapports de performance'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Annual audited financial statements'
          : 'États financiers annuels audités'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Monthly technical development updates'
          : 'Mises à jour techniques mensuelles'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Access to annual shareholder meetings'
          : 'Accès aux assemblées annuelles des actionnaires'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? '3.2 Technology Access' : '3.2 Accès à la Technologie'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The Investor will receive:'
            : 'L\'Investisseur recevra :'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Priority access to beta features and products'
          : 'Accès prioritaire aux fonctionnalités et produits en version bêta'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Invitations to technology preview events'
          : 'Invitations aux événements de présentation technologique'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Direct communication channel with the development team'
          : 'Canal de communication direct avec l\'équipe de développement'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? '3.3 Transfer Restrictions' : '3.3 Restrictions de Transfert'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The Investor may not sell, transfer, or encumber the shares during the lock-up period of 24 months from the date of this agreement. Any subsequent transfer must first be offered to the Company under the right of first refusal.'
            : 'L\'Investisseur ne peut pas vendre, transférer ou grever les actions pendant la période de blocage de 24 mois à compter de la date de cet accord. Tout transfert ultérieur doit d\'abord être proposé à la Société dans le cadre du droit de préemption.'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? '3.4 Confidentiality' : '3.4 Confidentialité'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The Investor agrees to maintain strict confidentiality regarding all non-public information received about the Company\'s technology, operations, and business strategies.'
            : 'L\'Investisseur s\'engage à maintenir une stricte confidentialité concernant toutes les informations non publiques reçues sur la technologie, les opérations et les stratégies commerciales de la Société.'}
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  );
};

const GovernancePage = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '4. GOVERNANCE AND VOTING RIGHTS' : '4. GOUVERNANCE ET DROITS DE VOTE'}
        </Text>
        
        <Text style={styles.subSectionTitle}>
          {isEnglish ? '4.1 Voting Rights' : '4.1 Droits de Vote'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'Class A Common Stock carries one vote per share on all matters submitted to a vote of the shareholders, including but not limited to:'
            : 'Les actions ordinaires de classe A donnent droit à une voix par action sur toutes les questions soumises au vote des actionnaires, y compris mais sans s\'y limiter :'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Election of board members'
          : 'Élection des membres du conseil d\'administration'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Approval of major corporate transactions'
          : 'Approbation des transactions corporatives majeures'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Amendments to corporate bylaws'
          : 'Modifications des statuts de la société'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? '4.2 Board Representation' : '4.2 Représentation au Conseil'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'While individual Class A shareholders do not have direct board representation, they may participate in the annual election of independent directors who represent minority shareholders\' interests.'
            : 'Bien que les actionnaires individuels de classe A n\'aient pas de représentation directe au conseil, ils peuvent participer à l\'élection annuelle des administrateurs indépendants qui représentent les intérêts des actionnaires minoritaires.'}
        </Text>

        <Text style={styles.subSectionTitle}>
          {isEnglish ? '4.3 Information Rights' : '4.3 Droits d\'Information'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'Shareholders have the right to inspect corporate books and records upon reasonable notice and during normal business hours, subject to signing a non-disclosure agreement.'
            : 'Les actionnaires ont le droit d\'inspecter les livres et registres de la société moyennant un préavis raisonnable et pendant les heures normales de bureau, sous réserve de la signature d\'un accord de confidentialité.'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '5. EXIT STRATEGY AND LIQUIDITY' : '5. STRATÉGIE DE SORTIE ET LIQUIDITÉ'}
        </Text>
        
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'The Company anticipates a liquidity event within 5-7 years from the date of this agreement, which may include:'
            : 'La Société prévoit un événement de liquidité dans les 5 à 7 ans suivant la date de cet accord, qui peut inclure :'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Initial Public Offering (IPO)'
          : 'Introduction en bourse (IPO)'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Strategic acquisition'
          : 'Acquisition stratégique'}
        </Text>
        <Text style={styles.bulletPoint}>• {isEnglish
          ? 'Secondary market sale'
          : 'Vente sur le marché secondaire'}
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  );
};

const SignaturePage = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '6. REPRESENTATIONS AND WARRANTIES' : '6. DÉCLARATIONS ET GARANTIES'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'Each party represents and warrants that it has full power and authority to enter into this Agreement and to perform its obligations hereunder.'
            : 'Chaque partie déclare et garantit qu\'elle a le plein pouvoir et l\'autorité de conclure le présent Accord et d\'exécuter ses obligations en vertu des présentes.'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEnglish ? '7. GOVERNING LAW' : '7. LOI APPLICABLE'}
        </Text>
        <Text style={styles.paragraph}>
          {isEnglish
            ? 'This Agreement shall be governed by and construed in accordance with the laws of Dubai, United Arab Emirates.'
            : 'Le présent Accord est régi et interprété conformément aux lois de Dubaï, Émirats Arabes Unis.'}
        </Text>
      </View>

      <View style={styles.signatureSection}>
        <View style={styles.signatureBlock}>
          <Text style={styles.label}>
            {isEnglish ? 'For NexusAI Corporation:' : 'Pour NexusAI Corporation :'}
          </Text>
          <View style={styles.signatureLine} />
          <Text style={styles.paragraph}>Pierre Dubois</Text>
          <Text style={styles.label}>
            {isEnglish ? 'Chief Executive Officer' : 'Directeur Général'}
          </Text>
          <Text style={styles.paragraph}>March 15, 2025</Text>
        </View>
        
        <View style={styles.signatureBlock}>
          <Text style={styles.label}>
            {isEnglish ? 'For the Investor:' : 'Pour l\'Investisseur :'}
          </Text>
          <View style={styles.signatureLine} />
          <Text style={styles.label}>
            {isEnglish ? 'Name' : 'Nom'}
          </Text>
          <View style={styles.input} />
          <Text style={styles.label}>
            {isEnglish ? 'Date' : 'Date'}
          </Text>
          <View style={styles.input} />
        </View>
      </View>

      <Text style={styles.footer}>
        {isEnglish
          ? 'CONFIDENTIAL - This document contains confidential and proprietary information. Unauthorized reproduction or distribution is strictly prohibited.'
          : 'CONFIDENTIEL - Ce document contient des informations confidentielles et propriétaires. Toute reproduction ou distribution non autorisée est strictement interdite.'}
      </Text>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  );
};

const InvestmentContract = ({ language = 'en' }) => (
  <Document>
    <PreamblePage language={language} />
    <TermsPage language={language} />
    <RightsPage language={language} />
    <GovernancePage language={language} />
    <SignaturePage language={language} />
  </Document>
);

export default InvestmentContract;