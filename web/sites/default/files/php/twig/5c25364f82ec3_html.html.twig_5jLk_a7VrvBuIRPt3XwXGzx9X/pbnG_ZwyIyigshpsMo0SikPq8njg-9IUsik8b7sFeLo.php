<?php

/* themes/contrib/basic/templates/html.html.twig */
class __TwigTemplate_0102d21a01653cf97554f2323c0ee9e3d3bbfe57e247ee9180d937d86182db20 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453 = $this->env->getExtension("Drupal\\webprofiler\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "themes/contrib/basic/templates/html.html.twig"));

        $tags = array("if" => 34, "set" => 51, "for" => 52);
        $filters = array("safe_join" => 47, "merge" => 53, "clean_class" => 53, "render" => 56, "t" => 68);
        $functions = array("attach_library" => 35);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'for'),
                array('safe_join', 'merge', 'clean_class', 'render', 't'),
                array('attach_library')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 33
        echo "<!DOCTYPE html>
";
        // line 34
        if ($this->getAttribute(($context["ie_enabled_versions"] ?? null), "ie8", array())) {
            // line 35
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("basic/ie8"), "html", null, true));
            echo "
";
        }
        // line 37
        if (($this->getAttribute(($context["ie_enabled_versions"] ?? null), "ie9", array()) || $this->getAttribute(($context["ie_enabled_versions"] ?? null), "ie8", array()))) {
            // line 38
            echo "  <!--[if lt IE 7]>     <html";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["html_attributes"] ?? null), "addClass", array(0 => "no-js", 1 => "lt-ie9", 2 => "lt-ie8", 3 => "lt-ie7"), "method"), "html", null, true));
            echo "><![endif]-->
  <!--[if IE 7]>        <html";
            // line 39
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["html_attributes"] ?? null), "removeClass", array(0 => "lt-ie7"), "method"), "html", null, true));
            echo "><![endif]-->
  <!--[if IE 8]>        <html";
            // line 40
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["html_attributes"] ?? null), "removeClass", array(0 => "lt-ie8"), "method"), "html", null, true));
            echo "><![endif]-->
  <!--[if gt IE 8]><!--><html";
            // line 41
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["html_attributes"] ?? null), "removeClass", array(0 => "lt-ie9"), "method"), "html", null, true));
            echo "><!--<![endif]-->
";
        } else {
            // line 43
            echo "<html";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["html_attributes"] ?? null), "html", null, true));
            echo ">
";
        }
        // line 45
        echo "  <head>
    <head-placeholder token=\"";
        // line 46
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["placeholder_token"] ?? null), "html", null, true));
        echo "\">
    <title>";
        // line 47
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->safeJoin($this->env, ($context["head_title"] ?? null), " | ")));
        echo "</title>
    <css-placeholder token=\"";
        // line 48
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["placeholder_token"] ?? null), "html", null, true));
        echo "\">
    <js-placeholder token=\"";
        // line 49
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["placeholder_token"] ?? null), "html", null, true));
        echo "\">
  </head>
  ";
        // line 51
        $context["classes"] = array();
        // line 52
        echo "  ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["user"] ?? null), "roles", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["role"]) {
            // line 53
            echo "    ";
            $context["classes"] = twig_array_merge(($context["classes"] ?? null), array(0 => ("role--" . \Drupal\Component\Utility\Html::getClass($context["role"]))));
            // line 54
            echo "  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['role'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 55
        echo "
  ";
        // line 56
        $context["sidebar_first"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_first", array()));
        // line 57
        echo "  ";
        $context["sidebar_second"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_second", array()));
        // line 58
        echo "  <body";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null), 1 => (( !        // line 59
($context["is_front"] ?? null)) ? ("with-subnav") : ("")), 2 => ((        // line 60
($context["sidebar_first"] ?? null)) ? ("sidebar-first") : ("")), 3 => ((        // line 61
($context["sidebar_second"] ?? null)) ? ("sidebar-second") : ("")), 4 => ((((        // line 62
($context["sidebar_first"] ?? null) &&  !($context["sidebar_second"] ?? null)) || (($context["sidebar_second"] ?? null) &&  !($context["sidebar_first"] ?? null)))) ? ("one-sidebar") : ("")), 5 => (((        // line 63
($context["sidebar_first"] ?? null) && ($context["sidebar_second"] ?? null))) ? ("two-sidebars") : ("")), 6 => ((( !        // line 64
($context["sidebar_first"] ?? null) &&  !($context["sidebar_second"] ?? null))) ? ("no-sidebar") : (""))), "method"), "html", null, true));
        // line 65
        echo ">
    <div id=\"skip\">
      <a href=\"#main-menu\" class=\"visually-hidden focusable skip-link\">
        ";
        // line 68
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Skip to main navigation")));
        echo "
      </a>
    </div>
    ";
        // line 71
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_top"] ?? null), "html", null, true));
        echo "
    ";
        // line 72
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page"] ?? null), "html", null, true));
        echo "
    ";
        // line 73
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_bottom"] ?? null), "html", null, true));
        echo "
    <js-bottom-placeholder token=\"";
        // line 74
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["placeholder_token"] ?? null), "html", null, true));
        echo "\">
      <script id=\"__bs_script__\">//<![CDATA[
    document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\\/script>\".replace(\"HOST\", location.hostname));
//]]></script>
  </body>
</html>
";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    public function getTemplateName()
    {
        return "themes/contrib/basic/templates/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  158 => 74,  154 => 73,  150 => 72,  146 => 71,  140 => 68,  135 => 65,  133 => 64,  132 => 63,  131 => 62,  130 => 61,  129 => 60,  128 => 59,  126 => 58,  123 => 57,  121 => 56,  118 => 55,  112 => 54,  109 => 53,  104 => 52,  102 => 51,  97 => 49,  93 => 48,  89 => 47,  85 => 46,  82 => 45,  76 => 43,  71 => 41,  67 => 40,  63 => 39,  58 => 38,  56 => 37,  51 => 35,  49 => 34,  46 => 33,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
/**
 * @file
 * Default theme implementation for the basic structure of a single Drupal page.
 *
 * Variables:
 * - logged_in: A flag indicating if user is logged in.
 * - root_path: The root path of the current page (e.g., node, admin, user).
 * - node_type: The content type for the current node, if the page is a node.
 * - css: A list of CSS files for the current page.
 * - head: Markup for the HEAD element (including meta tags, keyword tags, and
 *   so on).
 * - head_title: A modified version of the page title, for use in the TITLE tag.
 * - head_title_array: List of text elements that make up the head_title
 *   variable. May contain or more of the following:
 *   - title: The title of the page.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site.
 * - page_top: Initial rendered markup. This should be printed before 'page'.
 * - page: The rendered page markup.
 * - page_bottom: Closing rendered markup. This variable should be printed after
 *   'page'.
 * - styles: Style tags necessary to import all necessary CSS files in the head.
 * - scripts: Script tags necessary to load the JavaScript files and settings
 *   in the head.
 * - db_offline: A flag indicating if the database is offline.
 *
 * @see template_preprocess_html()
 *
 * @ingroup themeable
 */
#}
<!DOCTYPE html>
{% if ie_enabled_versions.ie8 %}
  {{- attach_library('basic/ie8') }}
{% endif %}
{% if ie_enabled_versions.ie9 or ie_enabled_versions.ie8 %}
  <!--[if lt IE 7]>     <html{{ html_attributes.addClass('no-js', 'lt-ie9', 'lt-ie8', 'lt-ie7') }}><![endif]-->
  <!--[if IE 7]>        <html{{ html_attributes.removeClass('lt-ie7') }}><![endif]-->
  <!--[if IE 8]>        <html{{ html_attributes.removeClass('lt-ie8') }}><![endif]-->
  <!--[if gt IE 8]><!--><html{{ html_attributes.removeClass('lt-ie9') }}><!--<![endif]-->
{% else -%}
  <html{{ html_attributes }}>
{% endif %}
  <head>
    <head-placeholder token=\"{{ placeholder_token }}\">
    <title>{{ head_title|safe_join(' | ') }}</title>
    <css-placeholder token=\"{{ placeholder_token }}\">
    <js-placeholder token=\"{{ placeholder_token }}\">
  </head>
  {% set classes = [] %}
  {% for role in user.roles %}
    {% set classes = classes|merge(['role--' ~ role|clean_class]) %}
  {% endfor %}

  {% set sidebar_first = page.sidebar_first|render %}
  {% set sidebar_second = page.sidebar_second|render %}
  <body{{ attributes.addClass(classes,
    not is_front ? 'with-subnav',
    sidebar_first ? 'sidebar-first',
    sidebar_second ? 'sidebar-second',
    (sidebar_first and not sidebar_second) or (sidebar_second and not sidebar_first) ? 'one-sidebar',
    (sidebar_first and sidebar_second) ? 'two-sidebars',
    (not sidebar_first and not sidebar_second) ? 'no-sidebar'
  ) }}>
    <div id=\"skip\">
      <a href=\"#main-menu\" class=\"visually-hidden focusable skip-link\">
        {{ 'Skip to main navigation'|t }}
      </a>
    </div>
    {{ page_top }}
    {{ page }}
    {{ page_bottom }}
    <js-bottom-placeholder token=\"{{ placeholder_token }}\">
      <script id=\"__bs_script__\">//<![CDATA[
    document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\\/script>\".replace(\"HOST\", location.hostname));
//]]></script>
  </body>
</html>
", "themes/contrib/basic/templates/html.html.twig", "C:\\xampp\\htdocs\\desarrollos\\grupoprogestiondev\\web\\themes\\contrib\\basic\\templates\\html.html.twig");
    }
}
