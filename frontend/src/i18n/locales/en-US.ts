const enUS = {
  translation: {
    // Navigation bar
    'navbar.dashboard': 'Dashboard',
    'navbar.apiMonitors': 'API Monitoring',
    'navbar.agentMonitors': 'Agent Monitoring',
    'navbar.statusPage': 'Status Page',
    'navbar.userManagement': 'User Management',
    'navbar.profile': 'Profile',
    'navbar.logout': 'Logout',
    'navbar.login': 'Login',
    'navbar.loggedInAs': 'Logged in as',
    
    // Common buttons and tips
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.back': 'Back',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.actions': 'Actions',
    'common.status': 'Status',
    'common.name': 'Name',
    'common.description': 'Description',
    'common.type': 'Type',
    'common.url': 'URL',
    'common.created': 'Created',
    'common.updated': 'Updated',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.confirm': 'Confirm',
    'common.success': 'Success',
    'common.error': 'Error',
    'common.warning': 'Warning',
    'common.info': 'Info',
    'common.retry': 'Retry',
    'common.refresh': 'Refresh',
    'common.deleting': 'Deleting...',
    'common.savingChanges': 'Saving Changes...',
    'common.saveChanges': 'Save Changes',
    'common.loadingError': 'Loading Error',
    'common.notFound': 'Not Found',
    'common.backToList': 'Back to List',
    'common.success.deleted': 'Successfully deleted',
    'common.success.updated': 'Successfully updated',
    'common.error.delete': 'Delete failed, please try again',
    'common.error.update': 'Update failed',
    'common.error.fetch': 'Failed to fetch data',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.copy': 'Copy',
    'common.copied': 'Copied',
    'common.deleteConfirmation': 'Confirm Deletion',
    'common.deleteConfirmMessage': 'Are you sure you want to delete? This action cannot be undone.',
    'common.second': 'second',
    'common.seconds': 'seconds',
    'common.minute': 'minute',
    'common.minutes': 'minutes',
    'common.close': 'Close',
    'common.unknown': 'Unknown',
    'common.comingSoon': 'Coming Soon',
    
    // Language selection
    'language.zhCN': '中文',
    'language.enUS': 'English',
    
    // Home page
    'home.title': 'Welcome to XUGOU',
    'home.subtitle': 'Simple and easy-to-use monitoring platform',
    'home.getStarted': 'Get Started',
    'home.learnMore': 'Learn More',
    'home.features.title': 'Features',
    'home.features.monitoring': 'Real-time Monitoring',
    'home.features.monitoring.desc': 'Monitor APIs and clients in real-time',
    'home.features.alerts': 'Alert Notifications',
    'home.features.alerts.desc': 'Get notified when issues are detected',
    'home.features.dashboard': 'Visual Dashboard',
    'home.features.dashboard.desc': 'View monitoring data and statistics intuitively',
    'home.features.statusPage': 'Status Page',
    'home.features.statusPage.desc': 'Provide a public status page for your services',
    
    // Login page
    'login.title': 'Login',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.button': 'Login',
    'login.registerLink': 'No account? Register',
    'login.rememberMe': 'Remember me',
    'login.error': 'Username or password is incorrect',
    
    // Register page
    'register.title': 'Register',
    'register.username': 'Username',
    'register.password': 'Password',
    'register.confirmPassword': 'Confirm Password',
    'register.email': 'Email',
    'register.button': 'Register',
    'register.loginLink': 'Already have an account? Login',
    'register.error.passwordMismatch': 'Passwords do not match',
    'register.error.usernameExists': 'Username already exists',
    'register.error.emailExists': 'Email already exists',
    'register.success.message': 'Registration successful, please login',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.summary': 'Summary',
    'dashboard.totalMonitors': 'Total Monitors',
    'dashboard.activeMonitors': 'Active Monitors',
    'dashboard.failingMonitors': 'Failing Monitors',
    'dashboard.uptime': 'Uptime',
    'dashboard.responseTime': 'Response Time',
    'dashboard.recent': 'Recent Events',
    'dashboard.noEvents': 'No events',
    'dashboard.refresh': 'Refresh',
    
    // Monitors list
    'monitors.title': 'Monitors',
    'monitors.create': 'Create Monitor',
    'monitors.noMonitors': 'No monitors',
    'monitors.filter.all': 'All',
    'monitors.filter.active': 'Active',
    'monitors.filter.paused': 'Paused',
    'monitors.status.up': 'Up',
    'monitors.status.down': 'Down',
    'monitors.status.paused': 'Paused',
    'monitors.lastChecked': 'Last Checked',
    'monitors.pageTitle': 'API Monitoring',
    'monitors.loadingError': 'Failed to load monitor data',
    'monitors.delete.confirm': 'Are you sure you want to delete this monitor?',
    'monitors.delete.failed': 'Failed to delete monitor',
    'monitors.addOne': 'Add Monitor',
    'monitors.notFound': 'No monitors found',
    'monitors.cardView': 'Card View',
    'monitors.tableView': 'List View',
    'monitors.refresh': 'Refresh',
    'monitors.retry': 'Retry',
    'monitors.table.name': 'Name',
    'monitors.table.url': 'URL',
    'monitors.table.status': 'Status',
    'monitors.table.responseTime': 'Response Time',
    'monitors.table.uptime': 'Uptime',
    'monitors.table.actions': 'Actions',
    'monitors.viewDetails': 'View Details',
    'monitors.edit': 'Edit Monitor',
    'monitors.delete': 'Delete Monitor',
    
    // Monitor details
    'monitor.details': 'Monitor Details',
    'monitor.edit': 'Edit Monitor',
    'monitor.delete': 'Delete Monitor',
    'monitor.pause': 'Pause Monitor',
    'monitor.resume': 'Resume Monitor',
    'monitor.history': 'History',
    'monitor.uptime': 'Uptime',
    'monitor.responseTime': 'Response Time',
    'monitor.events': 'Events',
    'monitor.noEvents': 'No events',
    'monitor.manualCheck': 'Manual Check',
    'monitor.checkCompleted': 'Monitor check completed',
    'monitor.checkFailed': 'Check failed',
    'monitor.deleteSuccess': 'Monitor successfully deleted',
    'monitor.deleteFailed': 'Failed to delete monitor',
    'monitor.notExist': 'Monitor does not exist',
    'monitor.returnToList': 'Return to monitors list',
    
    // Monitor detail tabs
    'monitor.tabs.overview': 'Overview',
    'monitor.tabs.history': 'Check History',
    'monitor.tabs.settings': 'Configuration',
    
    // Monitor status information
    'monitor.status.info': 'Status Information',
    'monitor.status.normal': 'Up',
    'monitor.status.failure': 'Down',
    'monitor.status.pending': 'Pending Check',
    'monitor.notChecked': 'Not checked yet',
    'monitor.lastCheck': 'Last checked',
    
    // Basic information
    'monitor.basicInfo': 'Basic Information',
    'monitor.method': 'Method',
    'monitor.interval': 'Check Interval',
    'monitor.timeout': 'Timeout',
    'monitor.expectedStatus': 'Expected Status Code',
    'monitor.createTime': 'Created At',
    
    // Check history
    'monitor.checkHistory': 'Check History',
    'monitor.noCheckHistory': 'No check history records',
    'monitor.history.time': 'Time',
    'monitor.history.status': 'Status',
    'monitor.history.responseTime': 'Response Time',
    'monitor.history.statusCode': 'Status Code',
    'monitor.history.error': 'Error',
    
    // Configuration details
    'monitor.configDetails': 'Configuration Details',
    'monitor.active': 'Active',
    'monitor.inactive': 'Inactive',
    'monitor.headers': 'Headers',
    'monitor.body': 'Body',
    
    // Create/Edit monitor
    'monitor.form.title.create': 'Create Monitor',
    'monitor.form.title.edit': 'Edit Monitor',
    'monitor.form.name': 'Monitor Name',
    'monitor.form.namePlaceholder': 'Enter monitor name',
    'monitor.form.url': 'URL',
    'monitor.form.urlPlaceholder': 'Enter URL to monitor',
    'monitor.form.method': 'Request Method',
    'monitor.form.interval': 'Check Interval (minutes)',
    'monitor.form.intervalMin': 'Minimum interval 1 minute',
    'monitor.form.timeout': 'Timeout (seconds)',
    'monitor.form.expectedStatus': 'Expected Status Code',
    'monitor.form.headers': 'Headers',
    'monitor.form.headerName': 'Name',
    'monitor.form.headerValue': 'Value',
    'monitor.form.headerNamePlaceholder': 'Header Name',
    'monitor.form.headerValuePlaceholder': 'Header Value',
    'monitor.form.addHeader': 'Add Header',
    'monitor.form.headersHelp': 'Add headers, e.g.: Content-Type: application/json',
    'monitor.form.body': 'Request Body',
    'monitor.form.bodyPlaceholder': 'Request body content',
    'monitor.form.cancel': 'Cancel',
    'monitor.form.creating': 'Creating...',
    'monitor.form.create': 'Create Monitor',
    'monitor.form.updating': 'Updating...',
    'monitor.form.update': 'Update Monitor',
    'monitor.form.createFailed': 'Failed to create monitor, please try again later',
    'monitor.form.updateFailed': 'Failed to update monitor',
    'monitor.form.unknownError': 'Unknown error',
    'monitor.form.required': 'Required',
    
    // Agents
    'agents.title': 'Agent List',
    'agents.create': 'Add Agent',
    'agents.noAgents': 'No agents',
    'agents.pageTitle': 'Agent Monitoring',
    'agents.viewAll': 'View All Agents',
    'agents.loadingDetail': 'Loading agent details...',
    'agents.loadingList': 'Loading agent list...',
    'agents.notFound': 'Agent Not Found',
    'agents.notFoundId': 'Agent with ID {id} not found',
    'agents.cardView': 'Card View',
    'agents.tableView': 'Table View',
    'agents.addAgent': 'Add Agent',
    'agents.system': 'System Status',
    'agents.copyCommand': 'Copy Command',
    'agents.table.name': 'Name',
    'agents.table.host': 'Hostname',
    'agents.table.ip': 'IP Address',
    'agents.table.status': 'Status',
    'agents.table.os': 'OS',
    'agents.table.version': 'Version',
    'agents.table.actions': 'Actions',
    
    // Agent details
    'agent.details': 'Agent Details',
    'agent.edit': 'Edit Agent',
    'agent.delete': 'Delete Agent',
    'agent.status.online': 'Online',
    'agent.status.connecting': 'Connecting',
    'agent.status.offline': 'Offline',
    'agent.lastSeen': 'Last Seen',
    'agent.uptime': 'Uptime',
    'agent.lastUpdated': 'Last Updated',
    'agent.systemInfo': 'System Info',
    'agent.systemResources': 'System Resources',
    'agent.os': 'System',
    'agent.version': 'Version',
    'agent.hostname': 'Hostname',
    'agent.ipAddress': 'IP Address',
    'agent.systemStatus': 'System Status',
    'agent.deleteConfirm': 'Are you sure you want to delete this agent? This action cannot be undone.',
    'agent.deleting': 'Deleting agent...',
    'agent.deleteSuccess': 'Agent has been deleted successfully',
    'agent.deleteError': 'Failed to delete agent',
    
    // Create/Edit agent
    'agent.form.title.create': 'Add Agent',
    'agent.form.title.edit': 'Edit Agent',
    'agent.form.editingClient': 'Editing Agent: {name}',
    'agent.form.name': 'Agent Name',
    'agent.form.namePlaceholder': 'Enter agent name',
    'agent.form.nameHelp': 'Set a recognizable name for this agent',
    'agent.form.updateSuccess': 'Agent updated successfully',
    'agent.form.updateError': 'Update failed',
    
    // Add agent page
    'agent.add.note': 'The agent will be automatically added to the system after running the installation command, no manual creation needed',
    'agent.add.serverAddress': 'Server Address',
    'agent.add.serverAddressPlaceholder': 'Enter server address, e.g.: https://xugou.example.com',
    'agent.add.serverAddressHelp': 'Make sure this address is accessible from the agent server',
    'agent.add.registrationToken': 'Registration Token',
    'agent.add.generatingToken': 'Generating token...',
    'agent.add.tokenHelp': 'This token will be used for your agent to register with the server, valid for 24 hours',
    'agent.add.installGuide': 'Installation Guide',
    'agent.add.installSteps': 'Follow these two steps to install and register the agent',
    'agent.add.step1': 'Step 1: Download the agent binary',
    'agent.add.step1Help': 'This command will download the latest agent binary from Cloudflare R2 storage and give it executable permissions',
    'agent.add.step2': 'Step 2: Register and start the agent',
    'agent.add.step2Help': 'This command will start the agent and automatically register it with the server. The interval parameter represents the reporting interval (in seconds)',
    'agent.add.optionalSetup': '(Optional) Set up the agent as a system service',
    'agent.add.optionalSetupHelp': 'On Linux/Unix systems, you can create a system service using the following commands',
    'agent.add.returnToList': 'Return to Agent List',
    
    // Users
    'users.title': 'User Management',
    'users.create': 'Create User',
    'users.noUsers': 'No user data',
    'users.error.fetch': 'Failed to fetch user list',
    'users.error.delete': 'Failed to delete user',
    'users.deleteConfirm': 'Are you sure you want to delete user "{username}"? This action cannot be undone.',
    'user.username': 'Username',
    'user.email': 'Email',
    'user.role': 'Role',
    'user.status': 'Status',
    'user.created': 'Created',
    'user.actions': 'Actions',
    
    // Profile
    'profile.title': 'Profile',
    'profile.edit': 'Edit Profile',
    'profile.changePassword': 'Change Password',
    'profile.changePasswordButton': 'Change Password',
    'profile.apiKeys': 'API Keys',
    'profile.createApiKey': 'Create API Key',
    'profile.notifications': 'Notification Settings',
    'profile.basicInfo': 'Basic Information',
    'profile.update': 'Update Profile',
    'profile.currentPassword': 'Current Password',
    'profile.newPassword': 'New Password',
    'profile.confirmNewPassword': 'Confirm New Password',
    'profile.error.notLoggedIn': 'User not logged in',
    'profile.error.passwordMismatch': 'Passwords do not match',
    'profile.error.update': 'Failed to update profile',
    'profile.error.passwordChange': 'Failed to change password',
    'profile.success.updated': 'Profile updated successfully',
    'profile.success.passwordChanged': 'Password changed successfully',
    
    // Status page
    'statusPage.title': 'System Status',
    'statusPage.allOperational': 'All systems operational',
    'statusPage.someIssues': 'Some systems experiencing issues',
    'statusPage.majorOutage': 'Major system outage',
    'statusPage.incidents': 'Incidents',
    'statusPage.noIncidents': 'No incidents in the last 30 days',
    'statusPage.history': 'History',
    'statusPage.lastUpdated': 'Last updated',
    'statusPage.justNow': 'just now',
    'statusPage.apiServices': 'API Services Status',
    'statusPage.agentStatus': 'Agent Monitoring Status',
    'statusPage.cancelPreviousRequest': 'StatusPage: Cancelling previous request',
    'statusPage.fetchingData': 'StatusPage: Fetching status page data...',
    'statusPage.dataResponse': 'StatusPage: Received status page data response:',
    'statusPage.requestCancelled': 'StatusPage: Request has been cancelled',
    'statusPage.processingData': 'StatusPage: Processing status page data:',
    'statusPage.fetchError': 'StatusPage: Failed to fetch status page data',
    'statusPage.autoRefresh': 'StatusPage: Auto-refreshing data...',
    'statusPage.componentUnmount': 'StatusPage: Component unmounting, clearing timer',
    'statusPage.displayResourceData': 'Displaying resource data:',
    
    // Status page config
    'statusPageConfig.title': 'Status Page Configuration',
    'statusPageConfig.preview': 'Preview Status Page',
    'statusPageConfig.save': 'Save Configuration',
    'statusPageConfig.general': 'General Settings',
    'statusPageConfig.services': 'API Services Settings',
    'statusPageConfig.agents': 'Agent Settings',
    'statusPageConfig.appearance': 'Appearance Settings',
    'statusPageConfig.pageTitle': 'Status Page Title',
    'statusPageConfig.pageTitlePlaceholder': 'Enter status page title',
    'statusPageConfig.pageDescription': 'Status Page Description',
    'statusPageConfig.pageDescriptionPlaceholder': 'Enter status page description',
    'statusPageConfig.publicUrl': 'Public Access URL',
    'statusPageConfig.publicUrlHelp': 'This URL can be shared publicly and accessed without login',
    'statusPageConfig.selectionNote': 'Note: If you don\'t select any API services or agents, the corresponding section will not appear on the status page.',
    'statusPageConfig.selectServicesPrompt': 'Select API services to display on the status page',
    'statusPageConfig.selectAgentsPrompt': 'Select agents to display on the status page',
    'statusPageConfig.logoUrl': 'Logo URL (optional)',
    'statusPageConfig.logoUrlPlaceholder': 'Enter logo image URL',
    'statusPageConfig.customCss': 'Custom CSS (optional)',
    'statusPageConfig.customCssPlaceholder': 'Enter custom CSS styles',
    'statusPageConfig.customCssHelp': 'Advanced users can add custom CSS to modify the appearance of the status page',
    'statusPageConfig.configSaved': 'Status page configuration saved',
    'statusPageConfig.saveError': 'Failed to save status page configuration',
    'statusPageConfig.fetchingConfig': 'Starting to fetch status page config...',
    'statusPageConfig.configFromProperty': 'Status page config from config property:',
    'statusPageConfig.tryingDirectResponse': 'API response appears to directly contain config data, trying to use directly',
    'statusPageConfig.parseError': 'Failed to parse API response:',
    'statusPageConfig.receivedConfig': 'Received status page config:',
    'statusPageConfig.monitorListType': 'Monitor list type:',
    'statusPageConfig.monitorCount': 'Monitor count:',
    'statusPageConfig.configMonitor': 'Config monitor',
    'statusPageConfig.noValidConfig': 'No valid status page config received or config is empty',
    'statusPageConfig.invalidResponse': 'Invalid API response',
    'statusPageConfig.fetchingMonitors': 'Starting to fetch all monitors...',
    'statusPageConfig.monitorsResponse': 'All monitors response:',
    'statusPageConfig.foundMonitor': 'Found monitor in config',
    'statusPageConfig.originalStatus': 'Original selected status',
    'statusPageConfig.processedStatus': 'Processed selected status',
    'statusPageConfig.notFoundMonitor': 'Monitor not found in config',
    'statusPageConfig.finalMonitorResult': 'Final monitor processing result',
    'statusPageConfig.selectedStatus': 'Selected status',
    'statusPageConfig.processedMonitorList': 'Processed monitor list',
    'statusPageConfig.fetchingAgents': 'Starting to fetch all agents...',
    'statusPageConfig.foundAgent': 'Found agent in config',
    'statusPageConfig.notFoundAgent': 'Agent not found in config',
    'statusPageConfig.finalAgentResult': 'Final agent processing result',
    'statusPageConfig.processedAgentList': 'Processed agent list',
    'statusPageConfig.fetchMonitorsError': 'Failed to fetch monitors',
    'statusPageConfig.fetchDataError': 'Failed to fetch data',
    'statusPageConfig.configLoaded': 'Status page config loaded, validating monitor selected status:',
    'statusPageConfig.invalidAgentId': 'Attempting to change invalid agent ID:',
    'statusPageConfig.savingConfig': 'Preparing to save config object:',
    'statusPageConfig.selectedMonitors': 'Selected monitors:',
    'statusPageConfig.selectedMonitorIds': 'Selected monitor IDs list:',
    'statusPageConfig.callingSaveApi': 'Starting to call save config API...',
    'statusPageConfig.saveApiResponse': 'Save config API response:',
    'statusPageConfig.serviceRendering': 'Service rendering',
    'statusPageConfig.agentRendering': 'Agent rendering',
    'statusPageConfig.monitorStatusChange': 'Monitor status change',
    'statusPageConfig.agentStatusChange': 'Agent status change',
    'statusPageConfig.from': 'from',
    'statusPageConfig.to': 'to',
    'statusPageConfig.components': 'Components',
    'statusPageConfig.addComponent': 'Add Component',
    'statusPageConfig.incidents': 'Incidents',
    'statusPageConfig.createIncident': 'Create Incident',
    
    // 404 Page
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you are looking for does not exist',
    'notFound.button': 'Go to Home',
    
    // Auth related
    'auth.error.fetchUser': 'Failed to fetch user information',
    'auth.error.login': 'Login failed',
    'auth.error.register': 'Registration failed',
    'login.error.tryAgain': 'Login failed, please try again later',
    'register.error.tryAgain': 'Registration failed, please try again later',
    
    // AgentCard component
    'agentCard.receivedData': 'AgentCard received client data',
    'agentCard.calculatedResource': 'Calculated resource usage',
    'agentCard.noMetrics': 'Client has no resource metrics data',
    'agentCard.resourceError': 'Failed to parse client resource usage data',
    'agentCard.status.active': 'Active',
    'agentCard.status.inactive': 'Offline',
    'agentCard.status.connecting': 'Connecting',
    
    // ClientResourceSection component
    'clientResource.cpu': 'CPU',
    'clientResource.memory': 'Memory',
    'clientResource.disk': 'Disk',
    'clientResource.network': 'Network Traffic',
    'clientResource.download': 'Download',
    'clientResource.upload': 'Upload',
    
    // MonitorCard component
    'monitorCard.status.up': 'Up',
    'monitorCard.status.down': 'Down',
    'monitorCard.status.pending': 'Pending',
    'monitorCard.responseTime': 'Response Time',
    'monitorCard.unknown': 'Unknown',
    
    // ResourceBar component
    'resourceBar.title': 'Resource Usage Progress Bar',
    
    // StatusSummaryCard component
    'statusSummary.title': 'Status Summary',
    
    // HeartbeatGrid component
    'heartbeatGrid.uptime': 'Uptime',
    'heartbeatGrid.up': 'Up',
    'heartbeatGrid.down': 'Down',
    'heartbeatGrid.unknownTime': 'Unknown time',
    
    // Footer
    'footer.copyright': '© {year} XUGOU. All Rights Reserved.',
    'footer.blog': 'Blog',
    'footer.youtube': 'YouTube Channel',
    'footer.tempMail': '24h Temporary Email'
  }
};

export default enUS;