import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, FileText, Shield, Mail } from 'lucide-react';
import InvestmentContract from './InvestmentContract';

export default function ContractDownload() {
  return (
    <section className="relative py-16 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Investment Opportunity</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
            Shape the future of artificial intelligence. Download our investment contract to discover how to become a NexusAI shareholder.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-blue-500 text-xl font-bold mb-2">Secure Investment</div>
              <p className="text-gray-400">Complete legal protection with a detailed and transparent contract</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-blue-500 text-xl font-bold mb-2">High Potential</div>
              <p className="text-gray-400">Join the AI revolution with a 1% stake in NexusAI</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-blue-500 text-xl font-bold mb-2">Full Support</div>
              <p className="text-gray-400">Access to financial reports and technology updates</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <PDFDownloadLink
                document={<InvestmentContract language="en" />}
                fileName="NexusAI-Investment-Contract-EN.pdf"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                {({ loading }) => (
                  <>
                    <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    <span className="font-semibold">
                      {loading ? "Preparing Document..." : "Download in English"}
                    </span>
                  </>
                )}
              </PDFDownloadLink>

              <PDFDownloadLink
                document={<InvestmentContract language="fr" />}
                fileName="NexusAI-Investment-Contract-FR.pdf"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                {({ loading }) => (
                  <>
                    <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    <span className="font-semibold">
                      {loading ? "Préparation du Document..." : "Télécharger en Français"}
                    </span>
                  </>
                )}
              </PDFDownloadLink>
            </div>
            
            <a href="mailto:nexusai255@gmail.com" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <span>nexusai255@gmail.com</span>
            </a>
          </div>
          
          <p className="text-sm text-gray-500 max-w-2xl text-center">
            This document is confidential and legally binding. We recommend having it reviewed by legal counsel before signing.
          </p>
        </div>
      </div>
    </section>
  );
}