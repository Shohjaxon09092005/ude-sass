import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      students: '10',
      courses: '2',
      tests: '5',
      reports: 'Basic',
      storage: '100MB',
      features: [
        'Up to 10 students',
        '2 courses',
        '5 tests/tasks',
        'Basic reports',
        '100MB storage',
        'Email support'
      ],
      limitations: [
        'No payment tracking',
        'No advanced analytics',
        'No custom branding'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Basic',
      price: '$9',
      period: 'per month',
      description: 'For small classes and tutors',
      students: '50',
      courses: '10',
      tests: '25',
      reports: 'Standard',
      storage: '2GB',
      features: [
        'Up to 50 students',
        '10 courses',
        '25 tests/tasks',
        'Standard reports',
        '2GB storage',
        'Payment tracking',
        'Attendance tracking',
        'Email support'
      ],
      limitations: [
        'No advanced analytics',
        'No custom branding'
      ],
      popular: false,
      buttonText: 'Choose Basic',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Most popular for growing schools',
      students: '200',
      courses: '30',
      tests: '100',
      reports: 'Advanced',
      storage: '10GB',
      features: [
        'Up to 200 students',
        '30 courses',
        '100 tests/tasks',
        'Advanced reports & analytics',
        '10GB storage',
        'Payment tracking & automation',
        'Attendance tracking',
        'Performance analytics',
        'Custom branding',
        'API access',
        'Priority support'
      ],
      limitations: [],
      popular: true,
      buttonText: 'Choose Pro',
      buttonVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For large institutions',
      students: 'Unlimited',
      courses: 'Unlimited',
      tests: 'Unlimited',
      reports: 'All Features',
      storage: '100GB',
      features: [
        'Unlimited students',
        'Unlimited courses',
        'Unlimited tests/tasks',
        'All report features',
        '100GB storage',
        'Advanced payment automation',
        'White-label solution',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'Custom training',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                EduManage
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your teaching needs
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="border-b">
                <th className="text-left p-6 font-medium text-gray-900">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="text-center p-6 relative">
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                        Most Popular
                      </Badge>
                    )}
                    <div className="font-bold text-xl text-gray-900">{plan.name}</div>
                    <div className="text-2xl font-bold text-indigo-600 mt-2">
                      {plan.price}
                      <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-6 font-medium">Students</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">{plan.students}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-6 font-medium">Courses</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">{plan.courses}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-6 font-medium">Tests/Tasks</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">{plan.tests}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-6 font-medium">Reports</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">{plan.reports}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-6 font-medium">Storage</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">{plan.storage}</td>
                ))}
              </tr>
              <tr>
                <td className="p-6"></td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center">
                    <Button 
                      variant={plan.buttonVariant} 
                      className="w-full"
                      asChild
                    >
                      <Link to="/dashboard">{plan.buttonText}</Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-indigo-600' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-indigo-600">
                  {plan.price}
                  <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  asChild
                >
                  <Link to="/dashboard">{plan.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;