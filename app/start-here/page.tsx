import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { CheckCircle, ArrowRight, Leaf } from 'lucide-react'

const quickWins = [
  {
    title: 'Switch to Organic Produce',
    description: 'Start with the Dirty Dozen - the most pesticide-heavy fruits and vegetables.',
    priority: 1,
  },
  {
    title: 'Choose Non-Toxic Cleaning Products',
    description: 'Replace conventional cleaners with natural alternatives for better indoor air.',
    priority: 2,
  },
  {
    title: 'Invest in Organic Bedding',
    description: 'Your bedroom is where you spend 1/3 of your life - make it count.',
    priority: 3,
  },
  {
    title: 'Switch to Natural Personal Care',
    description: 'Your skin absorbs everything - choose clean beauty products.',
    priority: 4,
  },
  {
    title: 'Filter Your Water',
    description: 'Remove contaminants and improve taste with a quality water filter.',
    priority: 5,
  },
]

const first30Days = [
  { week: 'Week 1', task: 'Audit your pantry - identify items to replace' },
  { week: 'Week 2', task: 'Switch to organic versions of the Dirty Dozen' },
  { week: 'Week 3', task: 'Replace one cleaning product with a natural alternative' },
  { week: 'Week 4', task: 'Research and try one organic personal care product' },
]

export default function StartHerePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-highlight/10 to-background py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Organic Journey Starts Here
            </h1>
            <p className="text-xl text-text/80 mb-8">
              Practical steps to transition to a healthier, more organic lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Why Go Organic */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Go Organic?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text/80 mb-4">
                Making the shift to organic living isn&apos;t about perfection—it&apos;s about making better
                choices, one step at a time. Every organic product you choose is a vote for:
              </p>
              <ul className="space-y-3 text-text/80">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Reduced exposure to pesticides and harmful chemicals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Better health outcomes for you and your family</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Supporting sustainable farming practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Creating a healthier home environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Protecting the environment for future generations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Start */}
      <section className="py-16 bg-highlight/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Where to Start</h2>
            <p className="text-lg text-text/80 mb-8">
              Don&apos;t try to change everything at once. Focus on areas with the highest impact first.
              Here&apos;s our priority framework:
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Priority 1: Food You Eat Daily</CardTitle>
                  <CardDescription>Start with what goes in your body most frequently</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text/70">
                    Focus on organic versions of the Dirty Dozen (strawberries, spinach, kale,
                    apples, etc.) and switch to organic dairy and meat when possible.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Priority 2: Products You Use Daily</CardTitle>
                  <CardDescription>Replace items you interact with most often</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text/70">
                    Start with personal care products (deodorant, shampoo, body lotion) and
                    cleaning products you use daily.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Priority 3: Your Sleep Environment</CardTitle>
                  <CardDescription>Where you spend a third of your life</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text/70">
                    Invest in organic bedding, mattresses, and pillows. These have long-term impact
                    on your health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Most Important Switches */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Most Important Switches (Top 5 Quick Wins)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickWins.map((win) => (
                <Card key={win.priority} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-primary">#{win.priority}</span>
                      <CheckCircle className="h-6 w-6 text-highlight" />
                    </div>
                    <CardTitle>{win.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text/70">{win.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your First 30 Days */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Your First 30 Days Organic
            </h2>
            <p className="text-lg text-text/80 mb-8 text-center">
              A simple, week-by-week action plan to get started
            </p>
            <div className="space-y-4">
              {first30Days.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-primary mb-1">{item.week}</h3>
                        <p className="text-text/70">{item.task}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-primary text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">
                  Get Your Free Organic Transition Checklist
                </CardTitle>
                <CardDescription className="text-white/80">
                  Join our community and get a printable 30-day action plan, plus weekly tips
                  delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-md text-text"
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Get My Free Checklist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

