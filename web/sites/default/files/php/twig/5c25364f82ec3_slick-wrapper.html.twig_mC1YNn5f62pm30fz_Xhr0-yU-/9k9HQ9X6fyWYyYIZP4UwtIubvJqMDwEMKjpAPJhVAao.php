<?php

/* modules/contrib/slick/templates/slick-wrapper.html.twig */
class __TwigTemplate_e9166318c19324492c9eaf1d7e11b0af88db2e0c78b6bda0dfa2e4b5b9201130 extends Twig_Template
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
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "modules/contrib/slick/templates/slick-wrapper.html.twig"));

        $tags = array("set" => 16, "for" => 30, "spaceless" => 35, "if" => 36);
        $filters = array("clean_class" => 19, "replace" => 25, "without" => 37);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'for', 'spaceless', 'if'),
                array('clean_class', 'replace', 'without'),
                array()
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

        // line 16
        $context["classes"] = array(0 => "slick-wrapper", 1 => (($this->getAttribute(        // line 18
($context["settings"] ?? null), "nav", array())) ? ("slick-wrapper--asnavfor") : ("")), 2 => (($this->getAttribute(        // line 19
($context["settings"] ?? null), "skin", array())) ? (("slick-wrapper--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "skin", array())))) : ("")), 3 => (($this->getAttribute(        // line 20
($context["settings"] ?? null), "skin_thumbnail", array())) ? (("slick-wrapper--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "skin_thumbnail", array())))) : ("")), 4 => (($this->getAttribute(        // line 21
($context["settings"] ?? null), "vertical", array())) ? ("slick-wrapper--v") : ("")), 5 => (($this->getAttribute(        // line 22
($context["settings"] ?? null), "vertical_tn", array())) ? ("slick-wrapper--v-tn") : ("")), 6 => (($this->getAttribute(        // line 23
($context["settings"] ?? null), "thumbnail_position", array())) ? (("slick-wrapper--tn-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "thumbnail_position", array())))) : ("")), 7 => ((twig_in_filter("over", $this->getAttribute(        // line 24
($context["settings"] ?? null), "thumbnail_position", array()))) ? ("slick-wrapper--tn-overlay") : ("")), 8 => ((twig_in_filter("over", $this->getAttribute(        // line 25
($context["settings"] ?? null), "thumbnail_position", array()))) ? (("slick-wrapper--tn-" . twig_replace_filter($this->getAttribute(($context["settings"] ?? null), "thumbnail_position", array()), array("over-" => "")))) : ("")));
        // line 28
        echo "
";
        // line 29
        ob_start();
        // line 30
        echo "  ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 31
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["item"], "html", null, true));
            echo "
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        $context["content"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 34
        echo "
";
        // line 35
        ob_start();
        // line 36
        echo "  ";
        if ($this->getAttribute(($context["settings"] ?? null), "nav", array())) {
            // line 37
            echo "    <div";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "id"), "html", null, true));
            echo ">
      ";
            // line 38
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
            echo "
    </div>
  ";
        } else {
            // line 41
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
            echo "
  ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    public function getTemplateName()
    {
        return "modules/contrib/slick/templates/slick-wrapper.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 41,  89 => 38,  84 => 37,  81 => 36,  79 => 35,  76 => 34,  66 => 31,  61 => 30,  59 => 29,  56 => 28,  54 => 25,  53 => 24,  52 => 23,  51 => 22,  50 => 21,  49 => 20,  48 => 19,  47 => 18,  46 => 16,);
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
 * Default theme implementation for a slick wrapper.
 *
 * Available variables:
 * - items: A list of items containing main and thumbnail of slick.html.twig
 *   which can be re-position using option Thumbnail position.
 * - attributes: HTML attributes to be applied to the list.
 * - settings: An array containing the given settings.
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'slick-wrapper',
    settings.nav ? 'slick-wrapper--asnavfor',
    settings.skin ? 'slick-wrapper--' ~ settings.skin|clean_class,
    settings.skin_thumbnail ? 'slick-wrapper--' ~ settings.skin_thumbnail|clean_class,
    settings.vertical ? 'slick-wrapper--v',
    settings.vertical_tn ? 'slick-wrapper--v-tn',
    settings.thumbnail_position ? 'slick-wrapper--tn-' ~ settings.thumbnail_position|clean_class,
    'over' in settings.thumbnail_position ? 'slick-wrapper--tn-overlay',
    'over' in settings.thumbnail_position ? 'slick-wrapper--tn-' ~ settings.thumbnail_position|replace({ 'over-' : '' })
  ]
%}

{% set content %}
  {% for item in items %}
    {{ item }}
  {% endfor %}
{% endset %}

{% spaceless %}
  {% if settings.nav %}
    <div{{ attributes.addClass(classes)|without('id') }}>
      {{ content }}
    </div>
  {% else %}
    {{ content }}
  {% endif %}
{% endspaceless %}
", "modules/contrib/slick/templates/slick-wrapper.html.twig", "C:\\xampp\\htdocs\\desarrollos\\grupoprogestiondev\\web\\modules\\contrib\\slick\\templates\\slick-wrapper.html.twig");
    }
}
