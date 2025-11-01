import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Certifications Guide - goOrganic',
  description:
    'Complete guide to organic certifications including USDA Organic, Non-GMO Project, Fair Trade, GOTS, EWG Verified, and Made Safe.',
}

const certifications = [
  {
    name: 'USDA Organic',
    description:
      'The gold standard for organic food and agricultural products in the United States. Products must contain at least 95% organic ingredients.',
    requirements: [
      'No synthetic pesticides or fertilizers',
      'No genetically modified organisms (GMOs)',
      'No antibiotics or growth hormones (for animal products)',
      'Annual inspections and certification required',
    ],
  },
  {
    name: 'Non-GMO Project Verified',
    description:
      'Indicates products that have been verified to contain no genetically modified organisms through third-party testing.',
    requirements: [
      'Rigorous testing for GMOs',
      'Tracing of ingredients back to source',
      'Ongoing monitoring and annual verification',
    ],
  },
]

export default function CertificationsPage() {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-b from-highlight/10 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Organic Certifications Guide
            </h1>
            <p className="text-xl text-text/80">
              Understanding what organic labels mean and how to make informed choices
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {certifications.map((cert) => (
              <Card key={cert.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{cert.name}</CardTitle>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-3">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-2 text-text/70">
                    {cert.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

