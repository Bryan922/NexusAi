import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, FileText, Shield, Mail } from 'lucide-react';
import InvestmentContract from './InvestmentContract';

export default function ContractDownload() {
  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Shield className="h-20 w-20 text-blue-500 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-white mb-4">Investment Opportunity</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-xl">
            Shape the future of artificial intelligence. Download our investment contract to discover how to become a NexusAI shareholder.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
              <div className="text-blue-500 text-2xl font-bold mb-1">Secure Investment</div>
              <p className="text-gray-400 text-lg">Complete legal protection with a detailed and transparent contract</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
              <div className="text-blue-500 text-2xl font-bold mb-1">High Potential</div>
              <p className="text-gray-400 text-lg">Join the AI revolution with a 1% stake in NexusAI</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
              <div className="text-blue-500 text-2xl font-bold mb-1">Full Support</div>
              <p className="text-gray-400 text-lg">Access to financial reports and technology updates</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <PDFDownloadLink
              document={<InvestmentContract language="en" />}
              fileName="NexusAI-Investment-Contract-EN.pdf"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              {({ loading }) => (
                <>
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  <span className="font-semibold text-lg">
                    {loading ? "Preparing Document..." : "Download in English"}
                  </span>
                </>
              )}
            </PDFDownloadLink>

            <PDFDownloadLink
              document={<InvestmentContract language="fr" />}
              fileName="NexusAI-Contrat-Investissement-FR.pdf"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              {({ loading }) => (
                <>
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  <span className="font-semibold text-lg">
                    {loading ? "Préparation du Document..." : "Télécharger en Français"}
                  </span>
                </>
              )}
            </PDFDownloadLink>
          </div>
          
          <a href="mailto:nexusai255@gmail.com" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors mt-4">
            <Mail className="w-6 h-6 mr-2" />
            <span className="text-lg">nexusai255@gmail.com</span>
          </a>
          
          <p className="text-base text-gray-500 max-w-2xl text-center mt-2">
            This document is confidential and legally binding. We recommend having it reviewed by legal counsel before signing.
          </p>
        </div>
      </div>
    </section>
  );
}